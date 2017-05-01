import ErrorServiceProvider from 'app/providers/ErrorServiceProvider'
import RequestServiceProvider from 'app/providers/RequestServiceProvider'
import Components from 'src/components.manifest'
import {loadComponent} from 'src/utils'

RequestServiceProvider.handle()

//Middlewares & inteceptor
import router from 'config/router'
import Middleware from 'config/middleware'
Middleware.handle(router)

export default {
	install(Vue, options){

        Components.forEach((dependency) => {
			if (typeof Vue.options.components[dependency.name] == 'undefined') { //Prevents of warning component already installed 
				Vue.component(dependency.name, loadComponent(dependency.path));
			}
		});


        Vue.mixin({
            mounted(){
				//Error service provider
                let Error = new ErrorServiceProvider(this)
            }
        })
    }
}