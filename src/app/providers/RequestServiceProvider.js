import Axios from 'axios'
import ErrorServiceProvider from './ErrorServiceProvider'
import {BASE_TOKEN, API_URL} from 'config/env'

let ErrorHandler = new ErrorServiceProvider()

/*
* Exceptions where we dont need to use the ErrorHandler
* When one response returns an error 401, ErrorHandler redirects to login automatically, however
* when you have an error during authetication server returns error 401 
* and you should not redirect because you already are in view login
*/
let routeExceptions = [
    BASE_TOKEN+"oauth/access_token"
];

export default {
    handle(){
        Axios.interceptors.response.use( response => {
            return response
        }, error => {
            //Common errors
            let url = error.response.config.url;

            if(routeExceptions.indexOf(url) < 0){
                ErrorHandler.handle(error.response)
            }

            return Promise.reject(error);
        });
    }
}


