require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({message:'Server works!'})
});

app.use('/api',routes);

const databaseConnection = () => {
  try{
    mongoose.connect(`mongodb+srv://${process.env.NAME_DB}:${process.env.PASS_DB}@todolist.zxsxxw6.mongodb.net/db`);
  }catch (e) {
    throw {message:'Database connection error!'}
  }
}

const server = async () => {
  app.listen(PORT, () => {
    try {
      databaseConnection();
      console.log(`Server has started on port ${PORT}`)
    } catch (e) {
      console.log(e);
    }
  })
}

server();