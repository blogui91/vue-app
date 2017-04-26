<template>
    <div class="layout-view" id="users-view">
      <div class="page-container">
        <h1>Users</h1>

        <ul>
          <li v-for="user in users_list">
            <img :src="user.profile_image" alt="">
             {{user.first_name}} {{user.last_name}} - {{user.email}}
          </li>
        </ul>

      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    users_list(){
      return this.$store.state.users.users
    },
    currentUser(){
      return this.$store.state.users.currentUser
    }
  },
  methods: {
    getUsersList(){
      this.$store.dispatch('users/getUsers')
    }
  },
  created(){
    this.getUsersList()
  },
  mounted () {

  },
  beforeDestroy () { }
}
</script>

<style lang="scss">
  #users-view{
    ul{
      li{
        img{
          border-radius : 50%;
          max-width: 40px;
        }
      }
    }
  }
</style>
