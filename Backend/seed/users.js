var mongoose    = require('mongoose');
var crypto      = require("crypto");
var user        = require("../models/users");
var pass        = crypto.createHmac("sha256","toor").update('petshop').digest("hex");

mongoose.Promise = global.Promise;
var connect      = "mongodb://root@localhost/petshop";
var options      = {server: {socketOptions : {keepAlive: 1}}};

mongoose.connect(connect , options);
user.find({username:"bismillah"} , function(err , data){
    if(data.length == 0){
        var data = new user({
            username:"bismillah",
            password:pass,
            email:"arsalan.dp@gmail.com",
            phone:"08111106622",
            alamat:"san jose, sf",
            tipe_user:"admin"
        });
        data.save(function(err){
            if(err) throw err;
            console.log("user data created..");
        })
    }
})