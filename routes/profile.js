const con= require('../conn/conn');
const express = require('express');
router = express.Router(); 


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
	
	
	})
	

//
module.exports = router ;