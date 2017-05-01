import BaseModel from './BaseModel'
import UserModel from './User.model'

export class Organization extends BaseModel
{
    constructor(data){
        let props = [
			'id',
			'name',
			'rfc',
            
		];

        props = {
            id : {
                default : 32
            },
            name : {
                default : "Cesar"
            },
            rfc : {
                default : "SACC910124UW5"
            }
            ,user : {
                default : new UserModel()
            }
        }
		super(props,data)
    }
}