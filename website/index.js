var _exec = require('child_process').execSync;
var express = require('express');
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/public', express.static(__dirname + '/client'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html')
})

app.get('/trees', function(req, res){
  execute('newtab');
  execute('selecturl');
  execute('trees');
  console.log('going to trees');
  res.sendStatus(200);
})
app.get('/in', function(req, res){
  execute('zoomin');
  console.log('going to trees');
  res.sendStatus(200);
})
app.get('/out', function(req, res){
  execute('zoomout');
  console.log('going to trees');
  res.sendStatus(200);
})
app.get('/refresh', function(req, res){
  execute('refresh');
  console.log('refreshing');
  res.sendStatus(200);
})
app.get('/rtrees', function(req, res){
  execute('newtab');
  execute('selecturl');
  execute('rtrees');
  console.log('going to /r/trees');
  res.sendStatus(200);
})
app.get('/switch', function(req, res){
  execute('switchtab')
  console.log('switching tabs');
  res.sendStatus(200);
})
app.get('/close', function(req, res){
  execute('closetab')
  res.sendStatus(200);
})
app.get('/new', function(req, res){
  execute('newtab')
  execute('selecturl')
  res.sendStatus(200);
})
app.get('/up', function(req, res){
  execute('up')
  res.sendStatus(200);
})
app.get('/down', function(req, res){
  execute('down')
  res.sendStatus(200);
})
app.get('/selecturl', function(req, res){
  execute('selecturl')
  res.sendStatus(200)
})
app.get('/fullscreen', function(req, res){
  execute('fullscreen')
  res.sendStatus('200')
})
app.post('/enter', function(req, res){
  var cmd = 'python ' + path('type') +' "'+req.body.text+'"';
  console.log(cmd)
  _exec(cmd, function(error, stdout, stderr) {
    console.log(error);
  });
  execute('clear');
  res.sendStatus(200);
})

function path(command){
  return '~/mobile_remote/python/'+command+'.py'
}

var execute = function(cmd){
  var cmd = 'python ' + path(cmd)
  console.log(cmd)
  _exec(cmd, function(error, stdout, stderr) {
    console.log(error);
  });
}

app.listen(8080)
