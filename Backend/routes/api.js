var express = require("express");
var router = express.Router();
var controller = require("../controller/api");

router.get("/",controller.Index);
router.post("/login", controller.Login);
router.post("/register", controller.Register);

// products functional
router.post("/produk/add", controller.CreateProduct);
router.get("/produk/list", controller.GetAllProducts);
router.get("/produk/remove/:id", controller.DeleteProduct);
router.post("/produk/edit", controller.EditProduct);
router.get("/produk/:id", controller.GetProduct);

// users functional
router.get("/users/list", controller.GetALlUsers);
router.get("/users/remove/:id", controller.DeleteUsers);
router.get("/users/detail/:id", controller.GetUserInfo);
router.post("/users/update/:id", controller.UpdateUser);


// cart functional
router.get("/cart/add/:id/:uid", controller.AddCart);
router.get("/cart/list/:id", controller.MyCart);
router.get("/cart/delete/:id", controller.DeleteCart);


module.exports = router;
