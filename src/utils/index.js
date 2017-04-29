export default {
    isEmpty(variable){
        if(!variable)return true

        if(variable.constructor == Object){
            if(JSON.stringify(variable) != '{}'){
                return true
            }
        }else{
            if(variable.constructor == Array){
                if(variable.length > 0){
                    return true;
                }
            }
        }

        return false
    }
}