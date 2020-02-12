const express = require('express');
router = express.Router();
con = require('../conn/conn');

router.post('/add',(req,res)=>{

    var lordData = {

        "fname" : req.body.fname,
        "lname" : req.body.lname,
        "id_no" : req.body.id_no,
        "email" : req.body.email,
        "cell":req.body.cell,
         "id_doc":req.body.id_doc,
         "proof_res":req.body.proof_res,
         "tax_doc":req.body.tax_doc

    };

    if(!userData){
        res.send({
            code : 400,
            message : "No data sent"
        });
    }

    var sql = "INSERT INTO landlord set ?";
   con.query(sql, [lordData], function (err, result) {
     if(err){
         res.send({
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

module.exports = router;