<style lang="scss">
</style>
<template>
</template>
<script>

	import OAuth from 'oauth'
  export default {
    data() {
      return{
        
      }
    },
    methods :{
     
    },
    beforeCreate(){
   		OAuth.logout();
   		console.log("Logging out")
    },
    watch: {
      
    }
  }
</script>