var mongoose =  require("mongoose");
var Schema   = mongoose.Schema;

var data_users = new Schema({
    username: {type:String , required:true , unique:true},
    password: {type:String , required:true },
    email: {type:String , required:true},
    phone: {type:String , required:true},
    alamat: {type:String , required:true},
    tipe_user: {type:String , required:true},

},{
    timestamps:true
});

var data_users = mongoose.model("user",data_users);

module.exports = data_users;