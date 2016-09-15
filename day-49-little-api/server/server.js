var express = require('express');
var app = express();

app.use(express.static('public'));


var leaders = [
  { name: 'Seleucus', url: 'https://en.wikipedia.org/wiki/Seleucus_I_Nicator' },
  { name: 'Lysimachus', url: 'https://en.wikipedia.org/wiki/Lysimachus' }
];


app.get('/api/diadochi', function(req, res) {
  res.send(leaders);
});




app.listen(5000, function() {
  console.log('listening on port 5000.');
});
