const express = require('express');
router = express.Router();
con = require('../conn/conn');
var crypto = require('crypto');


router.post('/reglord',(req,res)=>{

    var lordData = {

        fname:req.body.fname,
        lname:req.body.lname,
        id_no:req.body.id_no,
        email:req.body.email,
        cell:req.body.cell,
         campus_loc:req.body.campus_loc,
         title:req.body.title,
         pwd:req.body.pwd
         
    };

    
    if(!lordData){
        res.send({
            code : 400,
            message : "No data sent"
        });
    }

    var sql = "INSERT INTO landlord set ?";
   con.query(sql,[lordData], function (err, result) {
     if(err){
         res.send({
                data:result,
                status: 401,
                error: err 
         });
     }else{
         console.log('inserted into Lord table')
         res.send({
               data:result,
               status:200,
               
         });
     }
    });
});
////
router.get('/a',function(req,res){
    var sql = "SELECT * FROM landlord";

    con.query(sql,function(err, result){
        if(err){
            res.send('err')
        }else{
            res.send({data:result})
        }
    })
})

///
module.exports = router;

