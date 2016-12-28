// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
 if(error){
     return console.log('Unable to connect to MongoDB server');
 }

 console.log('Connected to MongoDB server');
  
//    db.collection('Todos').findOneAndUpdate({
//        _id : new ObjectID("5863bc8d12cfd2baa3d764ed")
//    },{
//     $set: {
//            completed: true
//        }

//    },{
//        returnOriginal:false

// }).then((res)=>{
//     console.log(res);
// })

   db.collection('Users').findOneAndUpdate({
       _id : new ObjectID("58639b7eae3b4323e86cd1c0")
   },{
    $set: {
           name: "jen"
       },
   $inc:{
       age:1
   }

   },{
       returnOriginal:false

}).then((res)=>{
    console.log(res);
})


//58639b7eae3b4323e86cd1c0
//  db.close();
});