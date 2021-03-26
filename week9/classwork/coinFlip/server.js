const http = require('http')
const fs = require('fs')
const url = require('url')
// const figlet = require('figlet')

const server = http.createServer( function(req,res){

  const page = url.parse(req.url).pathname
  console.log(page);
  if(page == '/'){
    fs.readFile('index.html', function(err, data){
      res.writeHead(200, {'Content-type' : 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if(page == 'css/style.css'){
    fs.readFile('css/style.css', function(err, data){
      res.write(data);
      res.end();
    });
  }
  else if(page == 'css/reset.css'){
    fs.readFile('css/reset.css', function(err, data){
      res.write(data);
      res.end();
    });
  }
  else if(page == 'js/main.js'){
    fs.readFile('js/main.js', function(err, data){
      res.writeHead(200, {'Content-type' : 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    console.log(page);
  }
});

server.listen(3333);
