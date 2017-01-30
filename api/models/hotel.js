import {Schema} from 'mongoose'

//账户
export default new Schema({
   name:String,
   address:String,
   form:[String]
});