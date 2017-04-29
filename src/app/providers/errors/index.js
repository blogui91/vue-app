import { Toast } from 'quasar'
import OAuth from 'src/oauth'
let Auth = new OAuth()
let Vue = null


let functions = {
    Vue : null,
    constructor(vue){
        this.Vue = vue
        //V = Vue 
        console.log(vue)
        vue.$t('343243')

    },
    handle(status){
        functions[status]()
    },
    401(){
        console.log(Vue)
        Toast.create({
            html:   this.Vue.$t('error_responses.401'),
            icon: 'alarm_add',
            timeout: 2500,
            color: '#ff2255',
            bgColor: 'blue',
            button: {
                //label: 'Undo',
                handler() {
                // Specify what to do when button is clicked/tapped
                },
                color: '#000'
            }
        });
    }
}

export default functions