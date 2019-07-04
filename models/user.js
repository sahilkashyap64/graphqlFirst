
import mongoose from 'mongoose';


const UserSchema= new mongoose.Schema({

	firstName:{
		type: String,required:true	
	},
	lastName:{
		type: String,required:true	
	},
	
	email:{type:String ,required:true},
	
	gender:{type:String},
	items:[{	ref:'item',//item was a document
		type:mongoose.Schema.Types.ObjectId,
	
		required:true}]
	
});
export default mongoose.model('user',UserSchema);