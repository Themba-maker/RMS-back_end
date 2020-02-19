const express = require('express');
router = express.Router();
con = require('../conn/conn');
const multer= require('multer');



const storage = multer.diskStorage({

   destination: function(req,file,cb){
    cb(null,"./upload");
      },
      filename: function(req,file,cb){
      cb(null,file.originalname);

      }
});


const upload = multer({storage:storage})


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
    //var email = req.body.email;
    var sql = "SELECT * FROM landlord WHERE email = ?";
    con.query(sql,[req.body.email],function(err,results){
        
    if(results.length > 0){
        res.send({
            data : results,
            code : 200,
            message : "User already exists"

        })

    }else{
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


//upload docs
router.post('/upload',upload.single('reg_proof'),(req,res)=>{

    reg_proof= req.file.path;
    

    con.query("INSERT INTO lord(reg_proof) VALUES ('"+ reg_proof+"') ",[reg_proof],function(err,result){
    if(err) throw err;
    
    else
    {
        return res.send({result});
    }
   })

})
module.exports = router;