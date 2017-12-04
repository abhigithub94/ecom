var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectId =require('mongodb').ObjectID;
var fileUpload = require('express-fileupload');


 // var bootstrap = require('bootstrap');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

/*DATABASE CONNECTION*/
var url='mongodb://localhost:27017/alm';
MongoClient.connect(url,function (err,db)
 {
	if(err)
	{
		throw err;
	}
	console.log("database is connected");
});





app.post('/adminlogin_link',function(req,res,next)
{
	console.log("body",req.body);
	
	console.log("username",req.body.username);
	console.log("password",req.body.password);
	auser=req.body.username;
	apass=req.body.password;

	MongoClient.connect(url,function (err,db)
		 {
			if(err)
			{
				throw err;
			}
			db.collection('adminlogin').find({}).toArray(function(err,results)
			{
				if(err)
				{
					throw err;
				}
				console.log(results);	
				console.log(results[0].username);
				var res1=results[0].username;
				console.log(results[0].password);
				var res2=results[0].password;
				var count;
				for (var i=0; i <=results.length-1; i++) 
				{
					if(results[i].username==auser && results[i].password==apass)
					{
						count=1;
					}
					else
					{
						count=0;
					}
				}
				if(count==1)
				{
					var response={status:true,message:"successfully login",results};
					res.send(response);	
				}
				if(count==0)
				{
					var response={status:false,message:" Incorrect Password or Username"};
					res.send(response);	
				}

				

			});
		});

	

});

app.use(fileUpload());

app.post('/upload_link',function(req,res,next)
{
	console.log("body********",req.body);
	data  = req.body;
	  var upimage1 = req.files.upimage1;
	  var upimage2 = req.files.upimage2;
	  var upimage3 = req.files.upimage3;
	  var upimage4 = req.files.upimage4;
	  var upimage5 = req.files.upimage5;
	  console.log("upimage1*************************",req.files.upimage1);
	  console.log("upimage2*************************",req.files.upimage2);
	  console.log("upimage3*************************",req.files.upimage3);
	  console.log("upimage4*************************",req.files.upimage4);
	  console.log("upimage5*************************",req.files.upimage5);
	
	
	MongoClient.connect(url,function (err,db)
	{
			if(err)
			{
				throw err;
			}
			
	

		db.collection("tshirt").insertOne(data ,function(err ,result)
		{
			// console.log("result************************************",result);  
			var inserted_id = result.insertedId;
			// console.log("data",data);
			// console.log( "after body",req.body);
			console.log("here is insertedIds******************************",result.insertedId); 
			var id = ObjectId(inserted_id);
			var img1 = 'image1_'+inserted_id;
			var img2 = 'image2_'+inserted_id;
			var img3 = 'image3_'+inserted_id;
			var img4 = 'image4_'+inserted_id;
			var img5 = 'image5_'+inserted_id;
			var object = {image1:img1,image2:img2,image3:img3,image4:img4,image5:img5,productlist:data.productlist,gender:data.gender,size28:data.size28,size32:data.size32,size34:data.size34,size36:data.size36,keyword:data.keyword,description:data.description,price:data.price,quantity:data.quantity};

	  		upimage1.mv('public/upload/'+img1, function(err) 
	  		{
	    		if (err)
	      			return res.status(500).send(err);
	  				// res.send('File uploaded!');
	  		});
	  		upimage2.mv('public/upload/'+img2, function(err) 
	  		{
	    		if (err)
	      			return res.status(500).send(err);
	  				// res.send('File uploaded!');
	  		});
	  		upimage3.mv('public/upload/'+img3, function(err) 
	  		{
	    		if (err)
	      			return res.status(500).send(err);
	  				// res.send('File uploaded!');
	  		});
	  		upimage4.mv('public/upload/'+img4, function(err) 
	  		{
	    		if (err)
	      			return res.status(500).send(err);
	  				// res.send('File uploaded!');
	  		});
	  		upimage5.mv('public/upload/'+img5, function(err) 
	  		{
	    		if (err)
	      			return res.status(500).send(err);
	  				// res.send('File uploaded!');
	  		});
	  		
		 	db.collection("tshirt").update({_id:id},object ,function(err1 ,result1)
		 	{

		  	});

		});
	});
	var response = { status:true,message:"HERE THERE DATA RECEVIED" }
    res.send(response);

});


app.get('/fetchall_link',function(req,res)
{
  
  
  	MongoClient.connect(url, function(err, db) {
  		if (err)
  		{
    		throw err;

  		} 
	  	db.collection('tshirt').find({}).toArray(function(err ,results)
	  	{  
			var response = { status:true,message:"all tshirt data is recived" ,results}
	  		res.send(response);
		});
	});

});


app.post('/fetchidData_link',function(req,res,next)
{
  
  console.log("keyword*****************_******************____",req.body);
  var keyword=req.body.keyword;
  	MongoClient.connect(url, function(err, db) {
  		if (err)
  		{
    		throw err;

  		} 
	  	db.collection('tshirt').find( { keyword : keyword }, { } ).toArray(function(err ,results1)
	  	{  
			
			console.log("result*****************",results1)
			var response = { status:true,message:"all tshirt data is recived" ,results1}
	  		res.send(response);
		});
	});

});






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen(9999,function(){
	console.log("Server is started at port 9999");
});
