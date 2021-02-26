var mongoose =  require("mongoose");
var Schema   = mongoose.Schema;

var data_produk = new Schema({
    nama_produk: {type:String , required:true , unique:true},
    harga: {type:String , required:true },
    keterangan: {type:String , required:true },
},{
    timestamps:true
});

var data_produk = mongoose.model("produk",data_produk);

module.exports = data_produk;