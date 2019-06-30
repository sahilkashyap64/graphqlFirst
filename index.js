import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolvers from './resolver';
const app=express();
app.get('/',(req,res)=>{
	return res.json({
		msg:'Welcome to GraphQl World!!!'
	});
});
const root=resolvers;
app.use('/graphql',graphqlHTTP({
	schema:schema,
	rootValue:root,
	graphiql:true
}));
app.listen(3000,()=>{
	console.log('App is running on PORT 3000');
})