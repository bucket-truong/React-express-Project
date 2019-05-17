const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const PostsController = require('./controllers/PostsController');
const SearchController = require('./controllers/SearchController');


app.use(morgan('short'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./db/db');



const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use('/posts', PostsController);
app.use('/search', SearchController);

const port = 9000;
app.listen(port, () => {
  console.log("LISTENING");
})
