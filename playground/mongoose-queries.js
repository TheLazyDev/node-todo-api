const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');


const {User} = require('./../server/models/user');




// var id = "5864f3f1af5ec02128701f9f";


// if(!ObjectID.isValid(id)){
//     console.log("Id not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });




// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo',todo);
// });


User.findById("5863cda05f5c181d6416baf0").then((user)=>{
    if(!user){
        return console.log("Unable to find user");
    }


    console.log(JSON.stringify(user,undefined,2));

},(e)=>{
    console.log(e);
})




// 5863cda05f5c181d6416baf0