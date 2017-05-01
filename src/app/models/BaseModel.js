import {isEmpty} from 'src/utils'

class MixinService 
{
    loadService(Service){
        this.service = Service
    }

    save(){

        if(!this.service){
            throw "You must load a service in your model."
        }

        let request = (resolve, reject) => {
            this.service.create(this.attributes).then(response =>{
                resolve(response)
            }).catch(error=>{
                reject(error)
            })
        }

        return new Promise(request)
    }

    delete(){
        if(!this.service){
            throw "You must load a service in your model."
        }

        let request = (resolve, reject) => {
            this.service.delete(this.attributes.id).then(response =>{
                resolve(response)
            }).catch(error=>{
                reject(error)
            })
        }

        return new Promise(request)
    }

    update(){
        if(!this.service){
            throw "You must load a service in your model."
        }

        let request = (resolve, reject) => {
            this.service.create(this.attributes.id, this.attributes).then(response =>{
                resolve(response)
            }).catch(error=>{
                reject(error)
            })
        }

        return new Promise(request)
    }
}

class BaseModel extends MixinService
{
    constructor(props = [], data = null){
        super()
        this.props = props
        this.attributes = {}
        this.run(data);
    }


    notify()
    {
        this.run();
    }

    addProps(props){
        if(this.props.constructor == props.constructor ){
            this.props = Array.concat(this.props, props);
            this.notify();
        }
    }
    run(data){
        let self = this;
        //Check if props in an array 
        if(this.props.constructor == Array){
            if(this.props.length){
                this.props.forEach(prop => { 
                    this.defineNewProperty(prop)
                    this.attributes[prop] = null
                })
                if(data){
                    this.fill(data)
                }
            }else{
                console.warn("Please make sure of declaring the props for your model!")
            }
            return;
        }else if(this.props.constructor == Object){
            if(isEmpty(this.props)){
                let props = Object.keys(this.props)
                props.forEach(prop => {
                    //Create setter and getter for the prop
                    this.defineNewProperty(prop);

                    //Set defaults
                    if(this.props[prop].default){ 
                        this.attributes[prop] = this.props[prop].default
                    }
                })
                if(data){
                    this.fill(data)
                }
                return;
            }
        }

        else{
            console.warn("Please make sure of declaring the props for your model!")
        }
    }

    defineNewProperty(attribute){
        var self = this;
        var setgetter = { 
            get: function get() {
                return self.attributes[attribute]; 
            }, 
            set : function set(value){
                self.attributes[attribute] = value 
            } 
        }
        Object.defineProperty(this, attribute,setgetter);
    }

    fill(data) {
        for(let key in this.attributes){
            console.log("Filling:", key)
            if (typeof data[key] !== 'undefined') {
                this.attributes[key] = data[key]
            }
        }
	}
}

export default BaseModel