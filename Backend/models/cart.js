var mongoose =  require("mongoose");
var Schema   = mongoose.Schema;

var data_cart = new Schema({
    id_user: {type:String , required:true },
    id_produk: {type:String , required:true},
    harga: {type:String , required:true}
},{
    timestamps:true
});

var data_cart = mongoose.model("cart",data_cart);

module.exports = data_cart;