var express = require('express');
var router = express.Router();

var mysql     =    require('mysql');
var pool      =    mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'wedding',
    debug    :  false
});

function handle_database(callback) {
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          callback({"code" : 100, "status" : "Error in connection database"});
          return;
        }   
        
        connection.query("select * from rsvp",function(err,rows){
            connection.release();
            if(!err) {
                callback([{"name": "Cody", "party_size": "3"}])
            }           
        });

        connection.on('error', function(err) {      
              callback({"code" : 100, "status" : "Error in connection database"});
        });
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  handle_database(function(rsvp_data) {
    console.log(rsvp_data);
    res.render('rsvp', {
      title: 'RSVP',
      rsvp_data: rsvp_data
    });
  });
});

module.exports = router;
