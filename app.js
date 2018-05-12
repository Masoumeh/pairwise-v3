var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

var datadir = './data-file/';
var files = fs.readdirSync(datadir);

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = datadir + files.filetoupload.name;
      var filetype = files.

      
      fs.copyFile(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File successfully uploaded!');
        res.write(newpath);
        res.end();
      });
    });

      
  } else {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8081);


(function getFiles() {
  fs.readdir('./data-file/', function (err, items) {

    for (var i = 0; i < items.length; i++) {
      if (path.extname(items[i]) === ".srt") {

        if(items[i].includes("_"))
        {
          var filename_split = files[i].split("_");
          newfilename = filename_split[1].split(".");

          
          console.log( {
            book_1_uri : filename_split[0],
            book_2_uri : newfilename[0],
          }
        )
        }
      }
    }
  });
})();