<template>
    <div class="page-container">
        <h1>{{$t('dashboard.title')}}</h1>
        <div class="floating-label">
            <textarea required class="full-width"></textarea>
            <label>Title</label>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
  },
  methods: {},
  computed : {
  },
  mounted () {
   
  },
  i18n
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
