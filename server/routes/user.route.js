const express = require('express');
const app = express();

app.get('/user', function (req, res) {
  res.json('get')
});

app.post('/user', function (req, res) {

  const body = req.body;

  if ( body.name === undefined ) {      
    res.status(400).json({
      ok: false,
      message: 'El nombre es requerido'
    });
  } else {
    res.json({
      name: body.name,
      lastname: body.lastname,
      email: body.email
    });
  }
});

app.put('/user/:id', function (req, res) {

  const id = req.params.id;
  res.json({
    id 
  });
});

app.delete('/user', function (req, res) {
  res.json('delete')
});

module.exports = app;