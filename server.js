const express = require('express');
const path = require('path');
const fs = require('fs')
const notesData = JSON.parse(fs.readFileSync('./db/db.json' , 'utf8'));


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());







app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));


app.get('/api/notes', (req, res) => {
  res.json(notesData);
});

app.post('/api/notes', (req, res) => {
  notes.push(newNote)
  res.json(newNote);
});








app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
