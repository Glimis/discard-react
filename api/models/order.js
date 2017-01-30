import {Schema} from 'mongoose'

var type=new Schema({
   name:String,
   value:String
});


export default new Schema({
   name:String,
   address:String,
   date: { type: Date, default: Date.now },
   form:[type]
});