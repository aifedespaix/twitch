<template>
  <div>
    <div>
      <input type="file" accept="video/*" @change="loadVideo" />
    </div>
    <div class="timesTravel">
      <div class="list">
        <v-btn @click="videoCursorMove(-60 * 3600)"> -1h </v-btn>
        <v-btn @click="videoCursorMove(-60 * 1800)"> -30m </v-btn>
        <v-btn @click="videoCursorMove(-60 * 600)"> +10m </v-btn>
        <v-btn @click="videoCursorMove(-60 * 300)"> +5m </v-btn>
        <v-btn @click="videoCursorMove(-60 * 60)"> -60s </v-btn>
        <v-btn @click="videoCursorMove(-30 * 60)"> -30s </v-btn>
        <v-btn @click="videoCursorMove(-10 * 60)"> -10s </v-btn>
        <v-btn @click="videoCursorMove(-5 * 60)"> -5s </v-btn>
        <v-btn @click="videoCursorMove(-1 * 60)"> -1s </v-btn>
        <v-btn @click="videoCursorMove(-0.5 * 60)"> -0.5s </v-btn>
        <v-btn @click="videoCursorMove(-0.25 * 60)"> -0.25s </v-btn>
        <v-btn @click="videoCursorMove(-0.1 * 60)"> -0.1s </v-btn>
      </div>
      <video ref="player" />
      <div class="list">
        <v-btn @click="videoCursorMove(60 * 3600)"> +1h </v-btn>
        <v-btn @click="videoCursorMove(60 * 1800)"> +30m </v-btn>
        <v-btn @click="videoCursorMove(60 * 600)"> +10m </v-btn>
        <v-btn @click="videoCursorMove(60 * 300)"> +5m </v-btn>
        <v-btn @click="videoCursorMove(60 * 60)"> +60s </v-btn>
        <v-btn @click="videoCursorMove(30 * 60)"> +30s </v-btn>
        <v-btn @click="videoCursorMove(10 * 60)"> +10s </v-btn>
        <v-btn @click="videoCursorMove(5 * 60)"> +5s </v-btn>
        <v-btn @click="videoCursorMove(1 * 60)"> +1s </v-btn>
        <v-btn @click="videoCursorMove(0.5 * 60)"> +0.5s </v-btn>
        <v-btn @click="videoCursorMove(0.25 * 60)"> +0.25s </v-btn>
        <v-btn @click="videoCursorMove(0.1 * 60)"> +0.1s </v-btn>
      </div>
      <v-slider
        v-model="time"
        class="duration"
        label="Time"
        min="0"
        max="100"
      />
    </div>
    <div v-if="video">
      <div class="metadatas">
        <v-text-field v-model="id" type="number" label="Number"></v-text-field>

        <v-text-field v-model="suffix" required label="Sufixe" />
      </div>
      <div>
        {{ video.currentTime }}
      </div>
      <div class="actions">
        <v-btn @click="startAt()">{{ sh }}:{{ sm }}:{{ ss }}</v-btn>
        <v-btn @click="addCommand()"> ADD </v-btn>
        <v-btn @click="endAt()">{{ eh }}:{{ em }}:{{ es }}</v-btn>
      </div>
      <div class="commands">
        <v-textarea
          onClick="this.select();"
          name="input-7-1"
          label="Commandes"
          :value="commandsList"
        ></v-textarea>
        <div>
          <v-text-field
            onClick="this.select();"
            v-for="(id, command) in commands"
            :key="id"
            :label="command.name"
            :value="command.cmd"
            readonly
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    commands: [],
    video: null,
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
    id: 1,
  }),
  computed: {
    commandsList: function () {
      let commandsList = ""
      for (let i = 0; i < this.commands.length; i++) {
        commandsList += `${this.commands[i].cmd}\n`
      }
      return commandsList
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
  methods: {
    loadVideo(e) {
      const file = e.srcElement.files[0]
      const type = file.type
      const videoNode = this.$refs["player"]

      this.title = file.name.split(".").slice(0, -1).join(".")

      var fileURL = URL.createObjectURL(file)
      videoNode.src = fileURL
      this.video = videoNode
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
      let suffix = ""
      if (this.suffix) {
        suffix = `${this.suffix}-${this.id}`
      } else {
        suffix = `${this.id}`
      }

      this.commands.push({
        name: `${this.title} ${this.suffix}`,
        cmd: `ffmpeg -ss ${this.from} -i ${this.title}.mp4 -c copy -t ${this.to} ${this.title}-${suffix}-cuted.mp4`,
      })
      this.id++
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
}
</script>

<style lang="scss">
video {
  height: 400px;
  width: 600px;
}

.timesTravel {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  justify-content: space-between;

  .list {
    display: flex;
    flex-direction: column;
  }
}

.duration {
  grid-column: span 3;
}

.commands {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.actions {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  justify-content: center;
}

.metadatas {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
