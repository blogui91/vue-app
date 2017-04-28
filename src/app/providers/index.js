
export class RouteServiceProvider
{
    constructor(){
        this.attributes = {
            routes : []
        }
    }

    register(routes){
         this.attributes.routes = Array.concat(this.attributes.routes,routes);
         return this
    }

    get routes(){
        return this.attributes.routes
    }
}
