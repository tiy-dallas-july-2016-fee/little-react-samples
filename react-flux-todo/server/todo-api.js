'use strict';

var data = [];

let get = function(req, res) {
  res.send({
    list: data
  })
}

let post = function(req, res) {

  var item = {
    id: Math.ceil(Math.random() * 1000000),
    text: req.body.text,
    isComplete: req.body.isComplete
  };
  data.push(item);

  res.send({ id: item.id });
}

var destroy = function(req, res) {

  var index = data.findIndex(x => x.id == req.params.id);

  console.log('deleting item with id', req.params.id, '"' + data[index].text + '"');

  data.splice(index, 1);

  res.sendStatus(204);
}

var put = function(req, res) {

  console.log('updating item with id', req.params.id);

  var index = data.findIndex(x => x.id == req.params.id);
  console.log('found', index, req.body.isComplete);
  data[index].isComplete = req.body.isComplete;
  data[index].text = req.body.text;

  res.sendStatus(204);
}

module.exports = {
  register: function(app) {
    app.options("*", function(req,res,next) {
      res.sendStatus(200);
    });

    app.get('/api/todo', get);
    app.post('/api/todo', post);
    app.put('/api/todo/:id', put);
    app.delete('/api/todo/:id', destroy);
  }
}
