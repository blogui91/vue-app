<template>
    <div class="layout-view" id="organization-view">
      <div class="page-container">
        <h1 v-text="$t('organizations.title')"></h1>
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
import { i18n } from './strings.js'
import { Dialog } from 'quasar'

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
  mounted(){ },
  i18n,
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
