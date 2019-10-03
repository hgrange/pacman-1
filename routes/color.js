var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Database = require('../lib/database');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date());
    next();
})

router.get('/color', function(req, res,next) {
       
        var color = process.env.COLOR || 'green'
        console.log("called color : "+color)
        res.json = {color}
    

});



module.exports = router;
