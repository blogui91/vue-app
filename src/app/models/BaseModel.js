import {isEmpty} from 'src/utils'
class BaseModel
{
    constructor(props = [], data = null){
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