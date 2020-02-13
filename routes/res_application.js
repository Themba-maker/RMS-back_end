const express = require('express');
const router = express.Router();

router.post('/apply',(req,res)=>{

    if(req.files){
        var file = req.files.filename;
             filename = file.name;
             file.mv('../uploads'+filename,function(err){
              if(err){
                  console.log(err)
               }
                 else{
                     console.log('file sent');
                 }
             })
    
    
    }


});
module.exports = router;