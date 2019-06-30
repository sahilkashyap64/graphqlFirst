
const users=[];//empty array
let user={};//empty object
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
	getUser:(_,{id},context,info)=>{
		return users.find(user=>user.id===id);//search through users array for the given id
	},
	users:()=>{
		return users;
	},},
	Mutation:{ createUser:(_,{input},context,info)=>{ //only things that is changed from buildschema to typedefs schema is params(obj,args,context,info)
		//console.log('args',args);//to see the args
		user=input;//put inputs in user object
		users.push(user);//push user object to array
		return user;//return that array

	}}

	
	
};
