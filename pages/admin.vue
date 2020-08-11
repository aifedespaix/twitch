<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <v-text-field v-model="title" />
        </v-col>
        <v-col>
          <v-text-field v-model="suffix" />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field v-model="sh" />
        </v-col>
        <v-col>
          <v-text-field v-model="sm" />
        </v-col>
        <v-col>
          <v-text-field v-model="ss" />
        </v-col>
        <v-col>
          <v-text-field v-model="sf" />
        </v-col>

        <v-spacer />

        <v-col>
          <v-text-field v-model="eh" />
        </v-col>
        <v-col>
          <v-text-field v-model="em" />
        </v-col>
        <v-col>
          <v-text-field v-model="es" />
        </v-col>
        <v-col>
          <v-text-field v-model="ef" />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div>
            ffmpeg -ss {{ from }} -i {{ title }}.mp4 -c copy -t {{ to }}
            {{ title }}-{{ suffix }}-cuted.mp4
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
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
  computed: {
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

<style></style>
