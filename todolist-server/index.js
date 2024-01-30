const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;
const name = 'romakachyra';
const pass = 'bTUyo5Ci4qoJT1MO';
// mongodb+srv://romakachyra:<password>@todolists.zxsxxw6.mongodb.net/



app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({message:'Server works!'})
})

app.use('/api',routes)

const server = async () => {
  app.listen(port, () => {
    try {
      mongoose.connect(`mongodb+srv://${name}:${pass}@todolist.zxsxxw6.mongodb.net/db`);
      console.log(`Server has started on port ${port}`)
    } catch (e) {
      console.log(e);
    }
  })
}

server();