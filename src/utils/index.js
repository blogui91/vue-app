export function isEmpty(variable){
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

export function loadView(component){
    return () => System.import(`views/${component}.vue`)
}
export function loadComponent(component) {
    return () => System.import(`components/${component}`)
}