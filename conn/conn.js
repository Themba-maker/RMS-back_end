const mysql = require('mysql');
const express = require('express');


const mysqlConn =mysql.createConnection({

  host:'buljpn6dt2rhf0t6npic-mysql.services.clever-cloud.com',
  user:'u46fxj2s6t5drq7d',
  password:'3D3EVvqjVkvWzK4xcrzF',
  database:'buljpn6dt2rhf0t6npic',
  port:'3306'

})


mysqlConn.connect((err)=>{

if(!err)
    console.log('db connection succeed');
else
    console.log('db connection failed');
});

module.exports =mysqlConn;
