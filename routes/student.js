const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');
 
//register student
router.post('/reg', function(req, res){  

    var post = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "password": req.body.password,
        "campus_loc": req.body.campus_loc,
        "studno": req.body.studno,
        "id_no": req.body.id_no,
        "cell_no": req.body.cell_no
    };


    var email = req.body.email;
    var myQuery1 = "SELECT * FROM student WHERE email = ?";
    db.query(myQuery1,[email],function(err,results){
        
        if(results.length > 0){

            res.send({
                data : results,
                code : 200,
                message : "Sorry, user already exist!"

            })

        }else{
                var myQuery = "INSERT INTO student SET ?";
                db.query(myQuery, [post], function(err, results){
                    if(err){
                        
                        res.send({
                            data : err,
                            code : 400,
                            message : "The was an error !!!"
                        });
                            
                    }else{
                        
                        console.log("results")
                        res.send({
                            data : results,
                            code : 200,
                            message : "Registered Successfully..."
            
                        })
                    }
            })
        }
        
    })
});

//Get all student
router.get('/getst/',(req,res)=>{
    db.query('SELECT email FROM student',(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
    
});


//Get a student
router.get('/getstud/:id',(req,res)=>{
    req.body.id
    db.query('SELECT * FROM student WHERE id = ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
    
});

//Delete a student
router.delete('/delstud/:id',(req,res)=>{
    db.query('DELETE FROM student WHERE id = ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
            res.send('Deleted successfully');
        else
            console.log(err);
    }) 
});
/////////////////////////////////////////////////////////////////////////////////////////////
router.get('/getResStatus',(req,res)=>{
    db.query('SELECT * FROM resapplication',(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
    
});

router.get('/getproperty',(req,res)=>
    db.query('SELECT * FROM property',(err,rows,fields)=>{
        if(!err)
            res.send(rows)
        else
            console.log(err)
    })
    
)

 module.exports = router ;