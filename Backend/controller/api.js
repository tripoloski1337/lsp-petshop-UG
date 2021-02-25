var users = require('../models/users');
var crypto  = require("crypto");
const KEY_PASS = "toor";
const jwt   = require("jsonwebtoken");
const exJwt = require("express-jwt");


exports.Index = function(req , res , next){
    res.json({foo: "bar"});
}

exports.Login = function(req , res , next){
    var username = req.body.username;
    var pass = req.body.password;
    var password = crypto.createHmac("sha256",KEY_PASS).update(pass).digest("hex");

    users.find({username:username,password:password} , function(err , data){
        if (err) throw err;
        console.log(data);
        if(data.length > 0){
            const token = jwt.sign({id:data[0]._id,username:data[0].username,email:data[0].email} , KEY_PASS , {expiresIn: 129600});
            res.json({msg:"authenticated", token:token , username:data[0].username , email:data[0].email, tipe:data[0].tipe_user});
        }else{
            res.json({msg:"fail"});
        }
    });
}

exports.Register = function(req, res, next){
    var username = req.body.username;
    var pass = req.body.password;
    var password = crypto.createHmac("sha256",KEY_PASS).update(pass).digest("hex");
    var email = req.body.email; //
    var phone = req.body.phone; //
    var addr = req.body.addr; //
    var tipe_user = "user"; //

    users.find({username:username} , function(err , data){
        // if err throw err;
        if(data.length == 0){
            var data = new users({
                username:username,
                password:password,
                email:email,
                phone:phone,
                alamat:addr,
                tipe_user:tipe_user
            });
            data.save(function(err){
                if(err) throw err;
                res.json({msg:"registered"})
            })
        }else{
            res.json({msg:"exist"});
        }
    })
}

