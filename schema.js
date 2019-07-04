import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolver';
const typeDefs =`

	type HackerNewsItem{
		id:String
		text:String
		timeISO:String
		time: Int
		title:String
		deleted:Boolean
	}
	type Email{
		email:String
	}
	enum GENDER{
		MALE
		FEMALE
		OTHER
	}
	type User{
		id: ID
		firstName:String
		lastName:String
		emails:[Email]
		email:String
		gender:GENDER
		items:[HackerNewsItem]
	}
	type Query{
		getitembyid(id:ID!):HackerNewsItem, #get HackerNewsItem by id
		item:HackerNewsItem,
		hello:String,
		getUser(id:ID):User, # to find user by id
		users:[User]
		getAllUsers:[User]
	}
	input UserInput{
		id: ID
		firstName:String!
		lastName:String!
		email:String
		gender:GENDER
		items:[ID!]
	}

	input HackerNewsItemInput{
			id:String
		text:String
		timeISO:String
		time: Int
		title:String
		deleted:Boolean
	}
	type Mutation{
		createUser(input:UserInput):User
        updateUser(input:UserInput):User
        deleteUser(id: ID!):User
		createItem(input:HackerNewsItemInput):HackerNewsItem
	}
	`;
	const schema=makeExecutableSchema({typeDefs,resolvers})
export default schema;