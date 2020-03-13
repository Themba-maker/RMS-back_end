
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
const jwt = require('jsonwebtoken')
const router = express.Router();
const bodyParser = require('body-parser');
const mysqlConn= require('../conn/conn');


/*const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./upload");
    },
            filename: function(req,file,cb){
            cb(null,file.originalname);
    }
});

const upload = multer({storage:storage});




		router.get('/lordlogin', function(req, res) {
	
			var email = req.body.email;
			var pwd = req.body.pwd;
			
		var sql = "SELECT * FROM landlord WHERE email = ? AND pwd = ?";
			con.query(sql, [email, pwd], function(error, results, fields) {
				
				if (results.length>0) {
					res.send(results)
					//  req.session.sesEmail = email;
					// 	console.log(req.session.sesEmail);
				}
				else{
					res.send(results)
						console.log(results)
				}
					
				   })
							   
					
				})
				//
				router.post('/studentlogin', function(req, res) {
	
					var email = req.body.email;
					var password = req.body.password;
					
				var sql = "SELECT email, password FROM student WHERE email = ? AND password = ?";
					con.query(sql, [email, password], function(error, results, fields) {
						
						
						if (results.length>0) {
							res.send('logged in')
						
						 	//req.session.sesEmail = email;
								//console.log(req.session.sesEmail);
								// res.send({
								// 	data : results,
								// 	code : 200,
								// 	message : "logged in Successfully..."
					
								// })
						}
						else{
							res.send("user not found")
							 
						}
							
						})
									   
							
						})
		


				// router.get('/stulogin', function(req, res) {
	
				// 	var email = req.body.email;
				// 	var pwd = req.body.pwd;
					
				// 	var sql = "SELECT * FROM `student` WHERE email = '"+ email +"' AND pwd = '"+ pwd +"'";
				//     //var sql = "SELECT * FROM student WHERE email = ? AND pwd = ?";
				// 	con.query(sql, [email, pwd], function(error, results, fields) {
						
				// 		if(error) throw error
				// 		else{
				// 			res.send("successfully logged");
				// 			req.session.userID = email;
				// 			console.log(req.session.userID);
				// 			  }
				
				// 		})
				// 	})

				
            //login working with session
				router.get('/userLogin', function(req, res) {
	
					var email = req.body.email;
					var password = req.body.password;
					
					if (email && password) {
						var sql = "SELECT * FROM `student` WHERE email = '"+ email +"' AND pwd = '"+ password +"'";
				    
					con.query(sql, [email, password], function(error, results, fields) {
					
						if (results.length>0) {
							res.send("successfully logged")
						 	req.session.sesEmail = email;
								console.log(req.session.sesEmail);
						}
						else{
							res.send("user not found"),
							    console.log(results)
						}
							
						})
						
					} else {
						res.send('Please enter Username and Password!');
						response.end();
					}
					
				})

//logout 
router.post('/logout', function(req,res){
	req.session.destroy(err =>{
		if (err) {
			res.send("logout failed!!!!")

		} else {
			res.clearCookie()
            res.redirect('/userLogin')	
		}

	})



});


router.post('/upload5',upload.single('reg_proof'),(req,res)=>{
    
    reg_proof = req.file.path;

    if (reg_proof) {
        con.query("INSERT INTO reg(reg_proof) VALUES ('"+ reg_proof + "')", [reg_proof], function(err,results){
            if (err) {
                res.send("upload document - failed.........file not received");  
            }
            else{
                return res.send({results,
                  message: "document upload - successful!!! --file received"})
            }
            }) 
    } else {
        res.send("PLEASE UPLOAD YOUR DOCUMENT");
    } 
});

//
router.post('/upload5',upload.single('images'),(req,res)=>{
    
    reg_proof = req.file.path;
	let post={
	  email:req.body.email,
	  propery_name:req.body.propery_name,
	  propery_owner:req.body.propery_owner,
	  city:req.body.city,
	  postal_code:req.body.postal_code,
	  street_address:req.body.street_address
            }
    if (reg_proof) {
		var myQuery = "INSERT INTO student SET ?";
                con.query(myQuery, [post], function(err, results){
					if (err) {
						res.send("property not added");  
					}
					else{
						return res.send({results,
						  message: " successful!!! -- property added"})
					}

				})
        con.query("INSERT INTO property(images) VALUES ('"+ images + "')", [images], function(err,results){
            if (err) {
                res.send("upload document - failed.........file not received");  
            }
            else{
                return res.send({results,
                  message: " successful!!! --file received"})
            }
            }) 
    } else {
        res.send("PLEASE UPLOAD YOUR DOCUMENT");
    } 
});
//


router.post('/addprofile',upload.single('proof_reg'),(req,res)=>{
    
    reg_proof = req.file.path;
	
    if (reg_proof) {
	
        con.query("INSERT INTO resapplication(proof_reg) VALUES ('"+ proof_reg + "')", [proof_reg], function(err,results){
            if (err) {
                res.send("upload document - failed.........file not received");  
            }
            else{
                return res.send({results,
                  message: " successful!!! --file received"})
            }
            }) 
    } else {
        res.send("PLEASE UPLOAD YOUR DOCUMENT");
    } 
});


router.post('/loginst', function (req, res) {

	var email= req.body.email;
	var password = req.body.st_password;

	if (email && password) {
		
		var query = 'SELECT * FROM student WHERE email = ? AND password= ?';

		db.query(query, [email, password], function (error, results) {

			if (error) {
				// console.log(error);
				res.json({
					message: error,
					status: 400
				})
			} else {
				if (results.length > 0) {  
					var payload = {
						id: results[0].id,
						name: results[0].firstname,
						lastName: results[0].lastname
					};
					var token = jwt.sign(payload, secretOrKey, { expiresIn: 60 * 5 }); //token expires in 5 minutes

					res.json({
						data: [results[0].firstname+ " " + results[0].lastname],
						message: " student LoggedIn Successfully",
						status: 200,
						token: token
					});
				} else {
					res.json({
						status: 401,
						message: "Incorect student number or password!"
					})/
				}
			}
		});
	}

});





router.get('/pro',function(req,res){

var name = req.body.name
var surname = req.body.surname
 var email = req.body.email;

 var sql = "select s.fname , s.lname, s.email, p.property_name, s.cell, id_num FROM  student s , property p where p.email = s.prop_email"
con.query(sql,[name,surname,email],function(err,results){

	if (!err)
	{
		res.send(results)
		console.log("results")
	}else{

		throw(err)
	}

}) 


})*/



router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.post('/login', function(request, response,error) {
	let user = request.body.email;
	let user_pass = request.body.password;
	var userType = request.body.userType;
	

	if (!user || !user_pass ){
		 return response.send({ msg: 'Please enter all fields' });
	}
	if (user_pass.length < 6) {
		return response.send({ msg: 'Password must be at least 6 characters' });
	  }
	if ( user && user_pass) 
	{
		if(userType == 1 )
		{				
		mysqlConn.query('SELECT * FROM student  WHERE email=? AND password=?', [user,user_pass], function(error, results, fields){		
			if (results.length>0) { 
				jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
					response.json({
						token,
					 user:results
					});
				  });	
			} 
			else {
				response.send('Incorrect  user_id and/or user_pass...!');
				console.log('incorrect pass or username.....');
				response.end();
			}			 	
		});
		}
		else if(userType == 2 ){
			mysqlConn.query('SELECT * FROM landlord WHERE email = ? AND password = ?', [user , user_pass], function(error, results, fields) {
				if (results.length>0) {
					jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
						response.json({
							token,
						 user:results
						});
					  });

				} else {
					response.send('Incorrect  user_id and/or user_pass...!');
					console.log('incorrect pass or username.....');
					response.end();
				}	
            })
		}else {
				mysqlConn.query('SELECT * FROM admin WHERE email = ? AND password = ?', [user , user_pass], function(error, results, fields) {
				if (results.length>0) 
				{
					jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
						response.json({
							token,
						 user:results
						});
					  });		
				} else {
					response.send('Incorrect  user_id and/or user_pass...!');
					console.log('incorrect pass or username.....');
					response.end();
				}})
			}};
});
router.get('/logout', (req, res) => {
	console.log( 'You are logged out');
	res.redirect('/login');
  });

  
router.get('/_login', function(req, res) {

    var email = req.body.email;
    var password = req.body.password;
    
    if(!email || !password)
    {
        res.send({message:'enter all the fields dkashdjhdasjd'})
	}

    mysqlConn.query('select * from student where email =? AND password =?',[email,password],(error,results)=>{  
       if(error)
       throw error;
             
                else
                {
                     
                      jwt.sign({email},'secretkey',{expiresIn:'60s'},(err,token)=>{
                        res.json({
                            token,
                            data:results
                        });
                       console.log(results)
                        
                    });
                }
                })
 });


 







module.exports = router;

