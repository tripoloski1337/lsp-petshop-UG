var express     = require("express");
var app         = express();
var PORT        = 8000;
var server      = require("http").createServer(app);
var bodyParser  = require("body-parser");
var logger      = require("morgan");
var methodOverride 		= require('method-override');
var createError = require("http-errors");
const mongoose    = require("mongoose");
mongoose.set('useCreateIndex', true);


/* NoSQL connection */
mongoose.connect('mongodb://localhost/petshop',{useNewUrlParser: true , useUnifiedTopology: true, server : { socketOptions: { keepAlive: 1 }}});


var apis = require("./routes/api")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger("dev"));
app.use(methodOverride(function(req , res){
	if(req.body && typeof req.body == "object" && "_method" in req.body){
		let method = req.body._method;
		delete req.body._method;
		return method;
	}
}));


/* enable cors */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , Authorization");
    next();
  });

app.use("/api",apis);

app.use(function(req , res , next){
	next(createError(404))
})
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') { 
        res.status(401).send(err);
    }
    else {
        next(err);
    }
});


/* create connection */
server.listen(PORT , function(){
    console.log("hello world , bismillah :)");
})

module.exports = app;

