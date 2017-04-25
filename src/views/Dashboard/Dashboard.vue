<template>
  <q-layout>
    <div slot="header" class="toolbar">
        <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
            <i>menu</i>
        </button>
        <q-toolbar-title :padding="0">
            Cuadrangular App v{{$q.version}}
        </q-toolbar-title>
    </div>

    <div slot="header" class="toolbar primary">
      <q-search :model.sync="search" class="primary"></q-search>
    </div>


    <q-drawer ref="leftDrawer">
        <div class="toolbar light">
            <q-toolbar-title :padding="1">
            Drawer
            </q-toolbar-title>
        </div>

        <div class="list no-border platform-delimiter">
            <q-drawer-link icon="view_quilt" to="/showcase/layout" exact>
                About Layout
            </q-drawer-link>
            <hr>
            <div class="list-label">Layout Components</div>
            <q-drawer-link icon="build" @click="logout">
                Log out
            </q-drawer-link>
            <q-drawer-link icon="tab" to="/showcase/layout/tabs">
                Tabs
            </q-drawer-link>
            <q-drawer-link icon="compare_arrows" to="/showcase/layout/drawer">
                Layout Drawer
            </q-drawer-link>
        </div>
    </q-drawer>

    <!--
      Replace following "div" with
      "<router-view class="layout-view">" component
      if using subRoutes
    -->
    <div class="layout-view">
      <!-- <div class="hide logo-container non-selectable no-pointer-events">
        <div class="logo" :style="position">
          <img src="~assets/quasar-logo.png">
          <p class="caption text-center">
            <span class="desktop-only">Move your mouse.</span>
            <span class="touch-only">Touch screen and move.</span>
          </p>
        </div>
      </div> -->
      <div class="page-container">
          <div class="floating-label">
              <textarea required class="full-width"></textarea>
              <label>Floating Label</label>
          </div>
          
      </div>
    </div>
  </q-layout>
</template>

<script>
var moveForce = 30
var rotateForce = 40

import { Utils } from 'quasar'
import OAuth from 'src/oauth'

let Auth = new OAuth()

export default {
  data () {
    return {
      moveX: 0,
      moveY: 0,
      rotateY: 0,
      rotateX: 0,
      search: 'cesar santana'
    }
  },
  computed: {
  },
  methods: {
    getUser(){
        this.$store.dispatch('users/getCurrentUser', 56)
    },
    logout(){
      Auth.logout()
    }
  },
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
