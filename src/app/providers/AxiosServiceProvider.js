import Axios from 'axios'
import ErrorHandler from './errors'




export default {
    handle(){
        Axios.interceptors.response.use( response => {

            console.log("response", response);
            
            return response
        }, error => {
            //Common errors
            let status = error.response.status
            ErrorHandler.handle(status)
            return Promise.reject(error);
        });
    }
}


