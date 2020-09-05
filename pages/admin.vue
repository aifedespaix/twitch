<template>
  <v-container>
    <v-row>
      <input type="file" accept="video/*" @change="loadVideo" />
    </v-row>
    <div class="timesTravel">
      <div class="list">
        <v-btn @click="videoCursorMove(-60 * 60)">-60</v-btn>
        <v-btn @click="videoCursorMove(-30 * 60)">-30</v-btn>
        <v-btn @click="videoCursorMove(-10 * 60)">-10</v-btn>
        <v-btn @click="videoCursorMove(-5 * 60)">-5</v-btn>
        <v-btn @click="videoCursorMove(-1 * 60)">-1</v-btn>
        <v-btn @click="videoCursorMove(-0.5 * 60)">-0.5</v-btn>
        <v-btn @click="videoCursorMove(-0.25 * 60)">-0.25</v-btn>
        <v-btn @click="videoCursorMove(-0.1 * 60)">-0.1</v-btn>
      </div>
      <video ref="player"></video>
      <div class="list">
        <v-btn @click="videoCursorMove(60 * 60)">+60</v-btn>
        <v-btn @click="videoCursorMove(30 * 60)">+30</v-btn>
        <v-btn @click="videoCursorMove(10 * 60)">+10</v-btn>
        <v-btn @click="videoCursorMove(5 * 60)">+5</v-btn>
        <v-btn @click="videoCursorMove(1 * 60)">+1</v-btn>
        <v-btn @click="videoCursorMove(0.5 * 60)">+0.5</v-btn>
        <v-btn @click="videoCursorMove(0.25 * 60)">+0.25</v-btn>
        <v-btn @click="videoCursorMove(0.1 * 60)">+0.1</v-btn>
      </div>
      <v-slider
        class="duration"
        v-model="time"
        label="Time"
        min="0"
        max="100"
      ></v-slider>
    </div>
    <v-row>
      <v-col>
        <v-text-field
          required
          label="Sufixe"
          v-model="suffix"
          :rules="[(value) => !!value || 'Required.']"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-btn @click="startAt()">Start at</v-btn>
      <v-btn @click="endAt()">End at</v-btn>
      <v-btn @click="addCommand()">ADD</v-btn>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <!-- <v-col>
            <v-text-field label="Filename" v-model="title" />
          </v-col> -->
        </v-row>

        <!-- <v-row>
          <v-col>
            <v-text-field label="h" v-model="sh" />
          </v-col>
          <v-col>
            <v-text-field label="m" v-model="sm" />
          </v-col>
          <v-col>
            <v-text-field label="s" v-model="ss" />
          </v-col>
          <v-col>
            <v-text-field label="fr" v-model="sf" />
          </v-col>

          <v-spacer />

          <v-col>
            <v-text-field label="h" v-model="eh" />
          </v-col>
          <v-col>
            <v-text-field label="m" v-model="em" />
          </v-col>
          <v-col>
            <v-text-field label="s" v-model="es" />
          </v-col>
          <v-col>
            <v-text-field label="f" v-model="ef" />
          </v-col>
        </v-row> -->

        <v-row>
          <v-col>
            <!-- <div>
              ffmpeg -ss {{ from }} -i {{ title }}.mp4 -c copy -t {{ to }}
              {{ title }}-{{ suffix }}-cuted.mp4
            </div> -->
            <v-text-field
              :key="command"
              v-for="command in commands"
              :label="command.name"
              :value="command.cmd"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    commands: [],
    title: "",
    sh: 0,
    sm: 0,
    ss: 0,
    sf: 0,
    eh: 0,
    em: 0,
    es: 0,
    ef: 0,
    suffix: "",
  }),
  methods: {
    loadVideo(e) {
      const file = e.srcElement.files[0]
      const type = file.type
      const videoNode = this.$refs["player"]

      this.title = file.name.split(".").slice(0, -1).join(".")

      var fileURL = URL.createObjectURL(file)
      videoNode.src = fileURL
    },
    videoCursorMove(qte) {
      const videoNode = this.$refs["player"]
      if (videoNode) {
        videoNode.currentTime = videoNode.currentTime + qte / 60
      }
    },
    startAt() {
      const time = this.getVideoTime()
      this.sf = time.f
      this.ss = time.s
      this.sm = time.m
      this.sh = time.h
    },
    addCommand() {
      this.commands.push({
        name: `${this.title} ${this.suffix}`,
        cmd: `ffmpeg -ss ${this.from} -i ${this.title}.mp4 -c copy -t ${this.to} ${this.title}-${this.suffix}-cuted.mp4`,
      })
    },
    endAt() {
      const time = this.getVideoTime()
      this.ef = time.f
      this.es = time.s
      this.em = time.m
      this.eh = time.h
    },
    getVideoTime() {
      const videoNode = this.$refs["player"]
      let trunc = Math.trunc(videoNode.currentTime)
      const frames = Math.round((videoNode.currentTime - trunc) * 60)
      const seconds = trunc % 60
      trunc = (trunc - seconds) / 60
      const minutes = trunc % 60
      trunc = (trunc - minutes) / 60
      const hours = trunc % 60

      return {
        f: frames,
        s: seconds,
        m: minutes,
        h: hours,
      }
    },
  },
  computed: {
    videoLoaded: function () {
      const videoNode = this.$refs["player"]
      return videoNode !== undefined
    },
    time: {
      get() {
        const videoNode = this.$refs["player"]
        if (!videoNode) {
          return 0
        }
        return (videoNode.currentTime / videoNode.duration) * 100
      },
      set(t) {
        const videoNode = this.$refs["player"]
        if (videoNode) {
          videoNode.currentTime = videoNode.duration * (t / 100)
        }
      },
    },
    from() {
      return `${this.sh}:${this.sm}:${this.ss}.${this.sf}`
    },
    to() {
      let r = false
      let f = parseInt(this.ef, 10) - parseInt(this.sf, 10)
      if (f < 0) {
        f = 60 + f
        r = true
      } else {
        r = false
      }

      let s = parseInt(this.es, 10) - parseInt(this.ss, 10)
      if (r) {
        s--
      }
      if (s < 0) {
        s = 60 + s
        r = true
      } else {
        r = false
      }
      let m = parseInt(this.em, 10) - parseInt(this.sm, 10)
      if (r) {
        m--
      }
      if (m < 0) {
        m = 60 + m
        r = true
      } else {
        r = false
      }
      let h = parseInt(this.eh, 10) - parseInt(this.sh, 10)
      if (r) {
        h--
      }
      if (h < 0) {
        h = 60 + h
        r = true
      } else {
        r = false
      }

      return `${h}:${m}:${s}.${f}`
    },
  },
}
</script>

<style lang="scss">
video {
  height: 400px;
  width: 600px;
}

.timesTravel {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto;

  .list {
    display: flex;
    flex-direction: column;
  }
}

.duration {
  grid-column: span 3;
}
</style>
