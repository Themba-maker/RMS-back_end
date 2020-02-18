const express = require('express');
router = express.Router();
con = require('../conn/conn');

router.post('/addlord',(req,res)=>{
    let lordData = {
    
        lname:req.body.lname,
        id_no:req.body.id_no,
        email:req.body.email,
        cell:req.body.cell,
         campus_loc:req.body.campus_loc,
         title:req.body.title,
         pwd:req.body.pwd,
         fname:req.body.fname
       
    }; 
    
    var sql = "INSERT INTO landlord set ?";
    con.query(sql,[lordData],function(err,result){

        if(err)throw err;
        
        else
        { 
        con.query('select * from landlord',function(err,result){
            if (err) throw err;
            else{
               
                return res.send({result})
            }

        })
    }
})

})

router.get('/getlord',(req,res)=>{

    con.query('SELECT * from landlord',function(err,result){
    if(err) throw err;
    
    else
    {
        return res.send({result});
    }
   })

})

module.exports = router;