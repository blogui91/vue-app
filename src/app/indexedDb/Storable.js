import Dexie from 'dexie'
import { INDEXEDDB_NAME } from 'config/env'
var pluralize = require('pluralize');
var _ = require('lodash');


export class Storable{

    constructor(){
        this.attributes = {};
        this.props = ['name','email','age'];
        this.primarykey = '++id'
        this.table = pluralize(_.kebabCase(this.getClassName()))
				.toLowerCase()
        this.db = new Dexie(INDEXEDDB_NAME)
        this.defineFields()
    }

    defineFields(){
        let schema = this.primarykey+","+this.props.toString();
        let object = {}
        object[this.table] = schema
        this.db.version(1).stores(object)
        this.model = this.db[this.table];
    }

    save(data){
        let table = this.table
        let db_table = this.db[table]
        let self = this;
        let request = (resolve,reject)  => {
            self.db.transaction('rw', db_table, () => {
                db_table.add(data).then((store)=>{
                    resolve(store)
                })
                .catch(e => {
                    console.log(":c ",e)
                    reject(e)
                })
            })
        }

        return new Promise(request)
    }


    async deleteById(id){
        let table = this.table
        let db_table = this.db[table]
        let self = this;
        
        let request = (resolve,reject)  => {
            self.db.transaction('rw', db_table, () => {
                db_table.where('id').equals(id).first().then((item)=>{
                    
                    if(item){
                        db_table.where('id').equals(id).delete().then(deleted => {
                            console.log(deleted)
                            resolve(deleted)
                        }) 
                        .catch(error => {
                            reject(error)
                        })
                    }
                })
                .catch(e => {
                    console.log(":c ",e)
                    reject(e)
                })
            })
        }

        return new Promise(request)

    }

    /**
	 * Returns name of the constructor.
	 *
	 * @returns String
	 */

	getClassName() {
		return this.constructor.name;
	}

    saveMethod(){

    }

    
}