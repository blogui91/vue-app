import {
  Toast
} from 'quasar'

import OAuth from 'src/oauth'

//Create bag to store error and be able to share them in a component
let VueService

class ErrorServiceProvider {
  constructor(Vue) {
    this.attributes = {
      toastProperties: {
        html: 'default message',
        icon: 'alarm_add',
        timeout: 2500,
        color: '#ddd',
        bgColor: '#EC263E',
        button: {
          //label: 'Undo',
          handler() {
            // Specify what to do when button is clicked/tapped
          },
          color: '#ddd'
        }
      }
    }


    if(!VueService && Vue){
          VueService = Vue;
    }
  }

  handle(error) {
    let status = error.status
    this["error"+status]();
  }

  error401() {
    let html = 'Unauthorized'
    let icon = 'account_box'
    if (VueService.$t('error_responses.401')){
      html = VueService.$t('error_responses.404')
    }

    let default_values = {
        html,
        icon
    }
    this.showToast(default_values);
    setTimeout(() =>{
      console.log("logging out")
      OAuth.logout()

    },1000)
  }

  showToast(properties) {
    this.setProps(properties)
    Toast.create(this.attributes.toastProperties)
  }

  error500() {
    let html = 'Server error'
    let icon = 'computer'

    if (VueService) {
      html = VueService.$t('error_responses.500')
    }

    let default_values = {
        html,
        icon 
    }

    this.showToast(default_values)
  }

  error404(){ //Not found
    let html = 'Resource not found'
    let icon = 'error'

    if (VueService) {
      html = VueService.$t('error_responses.404')
    }

    let default_values = {
        html,
        icon 
    }

    this.showToast(default_values)
  }

  setProps(default_values){
    Object.assign(this.attributes.toastProperties, default_values);
  }
}

export default ErrorServiceProvider