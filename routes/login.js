const express = require('express');
router = express.Router();
con = require('../conn/conn');



   router.get('/st', (req,res)=>{

    let email =( req.body.email)

   con.query('SELECT * from landlord where email = ? ',[email],function(error,results,fields){
    
       if(error){
         return res.send("error in  the query")
       }
       else{
        
               return res.send({data:results})
           }

       })





     /* / router.post('/insert',function(res,post){
connection.query("insert INTO studentTbl SET ? " ,res.body,function(err,rs){
res.render('insert success')
})

       })


      /* app.get('/logout', (req, res, next) => {
        req.logOut()
        console.log('Youve been logged out'),
        res.redirect('/login')*/
   
  })



   /*router.delete('/delete',function(req,res){

    var email = req.body.email;

    var sql = "DELETE FROM studentTbl WHERE email = ?";
   con.query(sql, [email], function (err, result) {
     if (err) throw err;
     console.log("Number of records deleted: " + result.affectedRows);
   });


   })


   //Update student table
/*router.post('/update',function(req,res){
    var name = req.body.name;
    var qty = req.body.qty;
  
    //Udate qty
    var sql="UPDATE studentTbl SET email = ? WHERE password = ? " ;
    mysqlConn.query(sql,[email,password] ,function (err, results,fields){
        if(!err){
                    
                    res.send(results)
                }else{
                    console.log(err)
                }
     });
    
  })*/
  

   


module.exports = router ;

