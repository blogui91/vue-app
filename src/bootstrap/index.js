import ErrorServiceProvider from 'app/providers/ErrorServiceProvider'

import {loadComponent} from 'src/utils'
import Components from 'src/components.manifest'

import RequestServiceProvider from 'app/providers/RequestServiceProvider'

//Middlewares & inteceptor
import router from 'app/providers/RouterServiceProvider'
import Middleware from 'app/middleware'


export default {
	install(Vue, options){
        
        RequestServiceProvider.handle()
        Middleware.handle(router)

        //Installing components
        Components.forEach((dependency) => {
			if (typeof Vue.options.components[dependency.name] == 'undefined') { //Prevents of warning component already installed 
				Vue.component(dependency.name, loadComponent(dependency.path));
			}else{
                console.warn('There is already a component with the name ' + dependency.name)
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