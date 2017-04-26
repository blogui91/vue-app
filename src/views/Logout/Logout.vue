<style lang="scss">
</style>
<template>
</template>
<script>

	import OAuth from 'oauth'
	let Auth = new OAuth()
  export default {
    data() {
      return{
        
      }
    },
    methods :{
     
    },
    beforeCreate(){
   		Auth.logout();
   		console.log("Logging out")
    },
    watch: {
      
    }
  }
</script>