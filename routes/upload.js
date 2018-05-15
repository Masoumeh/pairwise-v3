var express = require('express');
var router = express.Router();
const formidable = require('formidable');


router.post('/', (req, res) => {
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/Upload/'+dataFile;
        console.log(file.path)
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    res.render('index', { title: 'Express' });
});
module.exports = router;
