<template>
    <div class="layout-view" id="organization-view">
      <div class="page-container">
        <h1>Organizations</h1>
        <ul>
          <li v-for="organization in organizations_list">
            <img :src="organization.logo" alt="">
             {{organization.name}} - {{organization.rfc}}
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
    organizations_list(){
      return this.$store.state.organizations.organizations
    }
  },
  methods: {
    getOrganizations(){
      this.$store.dispatch('organizations/getOrganizations')
    }
  },
  created(){
    this.getOrganizations()
  },
  mounted () { },
  beforeDestroy () { }
}
</script>

<style lang="scss">

    #organization-view{
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
