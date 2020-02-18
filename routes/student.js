const express = require('express');
router = express.Router();
con = require('../conn/conn');

router.post('/addstudent',(req,res)=>{
    let studentData = {
    
        student_num:req.body.student_num,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
         id_no:req.body.id_no,
         pwd:req.body.pwd
       }; 
 
    var sql = "INSERT INTO student set ?";
    con.query(sql,[studentData],function(err,result){

        if(err)throw err;
        
        else
        { 
        con.query('select * from student',function(err,result){
            if (err) throw err;
            else{
               
                return res.send({result})
            }

        })
    }
})

})

router.get('/getstudent',(req,res)=>{

    con.query('SELECT * from student',function(err,result){
    if(err) throw err;
    
    else
    {
        return res.send({result});
    }
   })

})

module.exports = router;