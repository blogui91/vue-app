<template>
    <div class="page-container">
        <h1>Dashboard</h1>
        <div class="floating-label">
            <textarea required class="full-width"></textarea>
            <label>Floating Label</label>
        </div>
    </div>
</template>

<script>
import { Utils } from 'quasar'
import OAuth from 'src/oauth'

let Auth = new OAuth()

export default {
  data () {
    return {}
  },
  computed: {
  },
  methods: {},
  computed : {
    // user(){
    //     return this.$store.users.user
    // }
  },
  mounted () {
   
  },
  beforeDestroy () {
  }
}
</script>

<style lang="styl">
.logo-container
  width 192px
  height 268px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
