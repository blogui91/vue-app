import {
  Toast
} from 'quasar'


import OAuth from 'src/oauth'

class ErrorServiceProvider {
  constructor(Vue) {
    this.attributes = {
      Vue: null,
      toastProperties: {
        html: 'default message',
        icon: 'alarm_add',
        timeout: 2500,
        color: '#ddd',
        bgColor: '#EC263E',
        button: {
          //label: 'Undo',
          //handler() {
            // Specify what to do when button is clicked/tapped
          //},
          color: '#ddd'
        }
      }
    }


    if(!this.attributes.Vue && Vue){
        if(Vue.constructor.name == 'VueComponent' || Vue.constructor.name == 'Vue$2'){
          this.attributes.Vue = Vue;
        }else{
          throw "You must send an instance type VueComponent, but we received: "+Vue.constructor.name
        }
    }
  }

  handle(status) {
    this["error"+status]();
  }

  error401() {
    let html = 'Unauthorized'
    let icon = 'account_box'
    if (this.attributes.Vue) {
      html = this.attributes.Vue.$t('error_responses.401')
    }


    let default_values = {
        html,
        icon
    }
    this.showToast(default_values);
    setTimeout(() =>{
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

    if (this.attributes.Vue) {
      html = this.attributes.Vue.$t('error_responses.500')
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