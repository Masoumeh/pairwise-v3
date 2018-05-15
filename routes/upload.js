var express = require('express');
var router = express.Router();
const formidable = require('formidable');


router.post('/', (req, res) => {
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/../public/data-file/book1_book2.srt'; //+ file.name;
    });

    form.on('file', function (name, file){
        res.render('index', { names : file.name });
    });
});
module.exports = router;
