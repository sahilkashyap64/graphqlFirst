
const users=[];//empty array
let user={};//empty object
const resolvers={
	hello:()=>'Hello this is the evolution',//adding resolver 
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
	getUser:({id})=>{
		return users.find(user=>user.id===id);//search through users array for the given id
	},
	users:()=>{
		return users;
	},
	createUser:({input})=>{
		user=input;//put inputs in user object
		users.push(user);//push user object to array
		return user;//return that array

	}
};
export default resolvers;