var express = require('express');
var router = express.Router();
const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST the uploaded file*/
// router.post('/', (req, res) => {
//     var form = new formidable.IncomingForm();
//
//     form.parse(req);
//
//     form.on('fileBegin', function (name, file){
//         file.path = __dirname + '/uploads/dataFile';
//         console.log(file.path)
//     });
//
//     form.on('file', function (name, file){
//         console.log('Uploaded ' + file.name);
//     });
//
//     res.render('index', { title: 'Express' });
// });

module.exports = router;
