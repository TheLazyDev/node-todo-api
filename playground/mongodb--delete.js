// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
 if(error){
     return console.log('Unable to connect to MongoDB server');
 }

 console.log('Connected to MongoDB server');
  
//   db.collection('Todos').deleteMany({
//       text:"Eat Dinner"
//   }).then((res)=>{


//       console.log(res);
//   })


//    db.collection('Todos').deleteOne({
//        text:'Eat Dinner'
//    }).then((res)=>{
//        console.log(res);
//    })


//   db.collection('Todos').findOneAndDelete({
//       completed: false
//   }).then((res)=>{
//       console.log(res)
//   })


  
//   db.collection('Users').deleteMany({
//      name:"Bhavarsh"
//   }).then((res)=>{


//       console.log(res);
//   })
  
    db.collection('Users').findOneAndDelete({
     _id: new ObjectID('58639782b154302310e94fd5')
  }).then((res)=>{
      console.log(res)
  })
 
// 58639782b154302310e94fd5
//  db.close();
});