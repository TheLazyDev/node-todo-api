const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');


const {User} = require('./../server/models/user');

//  Todo.remove({}).then((res)=>{
//      console.log(res);
//  })



//  Todo.findOneAndRemove({

//      _id:"586624080bf9421937a9a2c4"

//  }).then((todo)=>{

//  })



// Todo.findByIdAndRemove('586624080bf9421937a9a2c4').then((todo)=>{

//     console.log(todo);

// })