<template>
  <q-layout>
    <div slot="header" class="toolbar" v-show="currentUser">
        <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
            <i>menu</i>
        </button>
        <q-toolbar-title :padding="0">
            Cuadrangular App v{{$q.version}}
        </q-toolbar-title>
    </div>

    <!-- <div slot="header" class="toolbar primary">
      <q-search :model.sync="search" class="primary"></q-search>
    </div>
 -->

    <q-drawer ref="leftDrawer" v-show="currentUser">
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
            <q-drawer-link icon="exit_to_app" :to="{ name : 'app.logout', exact : true}">
                Logout 
            </q-drawer-link>

            <q-drawer-link icon="tab" to="/showcase/layout/tabs">
                Tabs
            </q-drawer-link>
            <q-drawer-link icon="compare_arrows" to="/showcase/layout/drawer">
                Layout Drawer
            </q-drawer-link>

            <a href=""></a>
        </div>
    </q-drawer>

    <router-view class="layout-view"></router-view>

    <!-- Footer
    <div slot="footer" class="toolbar"></div>
    -->
  </q-layout>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed:{
    currentUser(){
        return this.$store.state.users.currentUser
    }
  }
}
</script>

<style>
</style>
