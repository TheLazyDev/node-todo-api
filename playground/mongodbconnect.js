// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
 if(error){
     return console.log('Unable to connect to MongoDB server');
 }

 console.log('Connected to MongoDB server');
  

// // db.collection('Todos').insertOne({
// text:"some text",
// completed: false
// },(error,result)=>{
//    if(error){
//        return console.log('Unable to insert',error);
//    }


//    console.log(JSON.stringify(result.ops,undefined,4));
// })


// db.collection('Users').insertOne({
//     name : "Bhavarsh",
//     age : 23,
//     location: "Jalandhar"
// },(error,result)=>{
//     if(error){
//         return console.log('Unable to insert the data',error);
//     }

//     console.log('Data entered',result.ops[0]._id.getTimestamp());
// })

 db.close();
});