import ErrorServiceProvider from 'app/providers/errors'

export const MyPlugin = {
    install(Vue, options){


        Vue.mixin({
            mounted(){
                let Error = new ErrorServiceProvider(this)
            }
        })
    }
}


