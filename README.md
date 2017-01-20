# MobileBrowserRemote
Express server to execute key presses on another computer.

# How to add commands
1. Make a python script in /python/. 
2. Inside the python file put the following:
  from keys import *
  keypress(commands) #commands: ctrl() shift() alt() enter() key() you can chain these any way you want just put the whole       thing in a keypress call
3. Copy paste the 'up' button and javascript and replace it with the name of the python file sans .py
4. Put this in index.js
  app.get('commandname', function(req, res){
    execute('pythonscriptname')
  })
  you should be able to figure it out by looking around
5. Run index.js
6. Go to (localip or localhost):8080

