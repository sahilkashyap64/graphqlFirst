
const users=[];//empty array
let user={};//empty object
import Item from './models/item';
import User from './models/user';
export const resolvers={
	Query:{hello:()=>'Hello this is the evolution',//adding resolver 
	item: () => {
		return {
			id:'12324',
		text:'THIS IS HACKER NEWS',
		timeISO:'tuseday 2 am',
		time: 12333,
		title:'Great 101',
		deleted:false
			
		}
	},
	getUser:async (_,{id},context,info)=>{
		return await User.findById(id); //search through users array for the given id
	},
	users:()=>{
		return users;
	},
	getitembyid: async (_,{id}) => {
		return await Item.findOne({_id:id}); //find user by id

	},
	getAllUsers:async()=>{
		return await User.find().populate('items');
	}

},
	Mutation:{ 
	createUser:async (_,{input})=>{ //only things that is changed from buildschema to typedefs schema is params(obj,args,context,info)
		//console.log('args',args);//to see the args
		const user = await User.create(input);//put inputs in user object
		
		return await User.findOne({_id:user.id}).populate('items')//find a newly creatted user make sure to return the item with their respective user

	},
	createItem: async (_,{input}) => {
    return Promise.resolve(Item.create(input));//registering a mutation
	},
	 updateUser:async (_,{input})=>{ //only things that is changed from buildschema to typedefs schema is params(obj,args,context,info)
		
		return await User.findOneAndUpdate({_id:input.id},input,{new:true});//find a newly creatted user make sure to return the item with their respective user

	},

	deleteUser: async (_,{id})=>{ //only things that is changed from buildschema to typedefs schema is params(obj,args,context,info)
		
		return await User.findOneAndRemove({_id : id});//find a user by id and delete it

	}

}

	
	
};
