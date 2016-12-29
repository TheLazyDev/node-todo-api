var mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://thelazydev:12349041a@ds035573.mlab.com:35573/todoapp');


module.exports = {
    mongoose
};