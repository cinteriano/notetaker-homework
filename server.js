const express = require('express');
const path = require('path');


const app = express();

const PORT = 3000;










app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

// app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/api/notes', (req, res) => {
  res.json(index);
});

app.get('/notes', (req, res) => {
  res.json(notes);
});








app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
