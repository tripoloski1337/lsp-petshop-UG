var users = require('../models/users');
var products = require('../models/produk');
var cart = require('../models/cart');
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
            res.json({msg:"authenticated", token:token , username:data[0].username , email:data[0].email, tipe:data[0].tipe_user, id:data[0]._id});
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

exports.CreateProduct = function(req, res, next){
    var nama = req.body.nama; //
    var harga = req.body.harga; //
    var ket = req.body.ket; //
    users.find({nama:nama}, function(err, data){
        if(data.length == 0){
            var data = new products({
                nama_produk: nama,
                harga: harga,
                keterangan: ket
            });
            data.save(function(err){
                if (err) throw err; //
                res.json({msg:"done!"})
            })
        }else{
            res.json({msg:"exist"})
        }
    })
}

exports.GetAllProducts = function(req, res, next){
    products.find({}, function(err, data){
        if(err) throw err; 
        res.json({data});
    })
}

exports.DeleteProduct = function(req, res, next){
    var id = req.params.id;
    products.findByIdAndRemove({_id:id}, function(err, data){
        if(err) throw err;
        console.log(data);
        res.json({msg:"oke!"});
    })
}


exports.EditProduct = function(req, res, next){
    var id = req.body.id;
    var nama = req.body.nama;
    var harga = req.body.harga;
    var ket = req.body.ket;

    console.log(id);
    console.log(nama);
    console.log(harga);
    console.log(ket);
    var newVal = {
        $set : {
            nama_produk: nama,
            harga:harga,
            keterangan:ket,
            }
    }
    products.findOneAndUpdate({_id:id}, newVal, function(err, data){
        console.log("oke");
        console.log(data);
        res.json({msg:"oke!"});

    })
}

exports.GetProduct = function(req, res, next){
    var id = req.params.id;
    products.find({_id:id}, function(err, data){
        console.log(data);
        res.json(data);
    })
}

exports.GetALlUsers = function(req, res, next){
    users.find({}, function(err, data){
        res.json(data);
    })
}

exports.DeleteUsers = function(req, res, next){
    var id = req.params.id;
    console.log("asw"+id);
    users.findByIdAndRemove({_id:id}, function(err, data){
        if(err) throw err;
        console.log(data);
        res.json({msg:"oke!"});
    })
}

exports.GetUserInfo = function(req, res, next){
    var id = req.params.id;
    users.find({_id:id}, function(err, data){
        res.json(data);
    })
}

exports.UpdateUser = function(req, res, next){
    var id = req.params.id;
    var username = req.body.username;
    var email = req.body.email;
    var phone = req.body.phone;
    var alamat = req.body.alamat;
    var newVal = {
        $set : {
            username:username,
            email: email,
            phone:phone,
            alamat:alamat,
            }
    }
    users.findOneAndUpdate({_id:id}, newVal, function(err, data){
        res.json({msg:"oke!"});
    })
}

exports.AddCart = function(req, res, next){
    var prod_id = req.params.id;
    var uid = req.params.uid;
    products.find({_id:prod_id}, function(err, x){
        var data = new cart({
            id_user: uid,
            id_produk: prod_id,
            harga: x[0].harga,
        });
        data.save(function(err){
            if (err) throw err; //
            res.json({msg:"done!"})
        })
    })
}

exports.MyCart = function(req, res, next){
    var id = req.params.id;
    cart.find({id_user:id}, function(err, data){
        res.json({data});
    })
}

exports.DeleteCart = function(req, res, next){
    var id = req.params.id;
    cart.findByIdAndRemove({_id:id}, function(err, data){
        console.log("okee");
        res.json({msg:"done!"});
    })
}