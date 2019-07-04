import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';
import mongoose from 'mongoose';


const app=express();
mongoose.Promise=global.Promise;//mongo promise to native promise
mongoose.connect('mongodb+srv://MyMongoDBUser:!ncFY4ULBCBVWhd@issuetracker-btvex.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
app.get('/',(req,res)=>{
	return res.json({
		msg:'Welcome to GraphQl World!!!'
	});
});

app.use('/graphql',graphqlHTTP({
	schema:schema,
	
	graphiql:true
}));
app.listen(3000,()=>{
	console.log('App is running on PORT 3000');
})