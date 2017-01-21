const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');


const bcrypt = require('bcryptjs');

var pass = "123abc!";


// bcrypt.genSalt(12,(err,salt)=>{
//     bcrypt.hash(pass,salt,(err,hash)=>{
//         console.log(hash);
//     })
// })


var hashedPass = '$2a$12$ZTqMJrrLmrc99n075DKoDefFxzFAiG1ogr.Ba7SF2Qe5KQJ6vXSX.';

bcrypt.compare('12',hashedPass,(err, res)=>{
    console.log(res);
})


// var data = {
//     id: 10
// };

// var token = jwt.sign(data,'123abc');

// var decoded = jwt.verify(token,'123abc');


// console.log('decoded',decoded);

// // var msg = "I am user number 3";


// // var hash = SHA256(msg).toString();



// // console.log(`Message: ${msg}`);

// // console.log(`Hash: ${hash}`);



// // var data = {
// //     id: 4
// // };


// // var token = {
// //     data,
// //     hash: SHA256(JSON.stringify(data) + "somesecret").toString()
// // }




// // token.data.id = 5;

// // token.hash = SHA256(JSON.stringify(token.data)).toString();





// // var resultHash = SHA256(JSON.stringify(token.data)+ "somesecret").toString();




// // if(resultHash === token.hash){
// //     console.log("Data was not changed");

// // } else {
// //     console.log("Data was changed");
// // }


