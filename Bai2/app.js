const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url === "/" || req.url === "/index.html") {
      fs.createReadStream(__dirname + "/index.html").pipe(res);
    } else if(req.url==='/api'){
      res.writeHead(200, { "Content-Type": "application/json" });
      var obj = {
        firstName: "Phan",
        lastName: "Phuong",
      };
      res.end(JSON.stringify(obj));

      // res.writeHead(200, {'Content-Type': 'text/html'});
      // fs.createReadStream(__dirname+'/index.html').pipe(res);
      // var html = fs.readFileSync(__dirname + '/index.html','utf-8');
      // var name = 'phuong';
      // html = html.replace('{name}',name);
      // res.end(html);
    }else{
        res.writeHead(404);
        res.end('Not Found');
    }
  })
  .listen(1337, "127.0.0.1", function () {
    console.log("Server listening on: 1337");
  });
