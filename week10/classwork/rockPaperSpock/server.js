//worked with gardner gang
const http = require('http');
const fs = require('fs')
const url = require('url');
var querystring = require('querystring');
let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']

// 0: rock
// 1: paper
// 2: scissors
// 3: Lizard
// 4: Spock
// (conditional) ? ifTrue : ifFalse //PC = 1, OC = 2 let result = 'You picked rock and your opponent picked paper. You lose!'
const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  // console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
    if('playerChoice' in params){
      let opponentChoice = choices[Math.floor(Math.random() * 5)]
      let win = `You picked ${params['playerChoice']} and your opponent picked ${opponentChoice}. You Win!`
      let tie = `You and your opponent both picked ${opponentChoice}. You It's a Tie!`
      let lose = `You picked ${params['playerChoice']} and your opponent picked ${opponentChoice}. You lose :(`

      let result = (opponentChoice === params['playerChoice']) ? tie : (params['playerChoice'] == 'rock' && (opponentChoice == 'scissors' || opponentChoice == 'lizard')) ? win : (params['playerChoice'] == 'paper' && (opponentChoice == 'rock' || opponentChoice == 'spock')) ? win : (params['playerChoice'] == 'scissors' && (opponentChoice == 'paper' || opponentChoice == 'lizard')) ? win : (params['playerChoice'] == 'spock' && (opponentChoice == 'scissors' || opponentChoice == 'rock')) ? win : (params['playerChoice'] == 'lizard' && (opponentChoice == 'paper' || opponentChoice == 'spock')) ? win : lose

      res.writeHead(200, {'Content-Type': 'application/json'});
      var objJson = {opponentChoice: opponentChoice, information: result}
      //var objJson = {palindrome: `Yes! ${params['word']} is in fact a palindrome`}
      res.end(JSON.stringify(objJson));
    }else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objJson =  {opponentChoice: 'N/A', information: 'result'}
        res.end(JSON.stringify(objJson));
      }
    }
    else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
   }
   else{
     console.log(page);
   }
});

server.listen(8000)
