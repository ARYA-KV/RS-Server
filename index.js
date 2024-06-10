//import json-server
const jsonServer=require('json-server')
//create server for app
const  RSServer=jsonServer.create()
//create middleware used by JSON server
const middleware=jsonServer.defaults()
//set up route for json file in server
const route=jsonServer.router('restaurant.json')
//set up port for running  server app
const PORT=3000 || process.env.PORT

RSServer.use(middleware)
RSServer.use(route)
RSServer.listen(PORT,()=>{
    console.log(`media player started at port ${PORT} and waiting for client request`);
})