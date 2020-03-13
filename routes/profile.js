const con= require('../conn/conn');
const express = require('express');
router = express.Router(); 


router.get('/prof',function(req,res){
	
    email = req.body.email
    firstname = req.body.firstname
	

	var sql = "select s.firstName, s.lastName , l.email , l.cell  FROM student s, landlord l WHERE l.email "

con.query(sql,[email],function(err,results,fields){

	if (results)
	{
res.send(results)
console.log("results")
	}else{
		throw(err);
	}
})
})

//
module.exports = router ;