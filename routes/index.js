var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // The initial data file to start the page is "Shamela0035100_JK006838"
    // which is set as names variable. In the view template it's accessed through
    // var book_names = '<%= names %>'
    res.render('index', { title: 'Express', names:'Shamela0035100_JK006838' });
});
module.exports = router;
