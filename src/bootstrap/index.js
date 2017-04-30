import ErrorServiceProvider from 'app/providers/ErrorServiceProvider'
import RequestServiceProvider from 'app/providers/RequestServiceProvider'

RequestServiceProvider.handle()

//Middlewares & inteceptor
import router from 'config/router'
import Middleware from 'config/middleware'
Middleware.handle(router)

export default {
	install(Vue, options){
        Vue.mixin({
            mounted(){
				//Error service provider
                let Error = new ErrorServiceProvider(this)
            }
        })
    }
}