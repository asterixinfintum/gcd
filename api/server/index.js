require("dotenv").config();
import "regenerator-runtime";
import express from "express";
import http from "http";
import cors from 'cors';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import path from 'path';

import mongoose from 'mongoose';

import routes from './routes';

const app = express();

const allowlist = ['https://grantcred.com', 'https://www.grantcred.com', 'http://localhost:3000'];

const corsOptionsDelegate = (req, callback) => {
  let corsOptions;

  let isDomainAllowed = allowlist.indexOf(req.header('Origin')) !== -1;

  if (isDomainAllowed) {
      corsOptions = { origin: true }
  } else {
      corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

app.use(cors(corsOptionsDelegate));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use(fileUpload({
  createParentPath: true
}));

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const {
  auth, 
  email, 
  admin, 
  user, 
  contact, 
  mitigate, 
  file,
  assets,
  changelogRoute,
  superadmin
} = routes;
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

app.use(auth);
app.use(email);
app.use(admin);
app.use(user);
app.use(contact);
app.use(mitigate);
app.use(file);
app.use(assets);
app.use(changelogRoute);
app.use(superadmin);


app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../public/ui/')));
const staticPath = path.join(__dirname, '../public/ui/');

mongoose.connect('mongodb://db:27017npm run watch:dev/grantc', {
  //mongodb://db:27017/apiswissnordic =====> production
  //mongodb://127.0.0.1:27017/apiswissnordic ===> development

    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).then(() => {
    console.log('connected to database');

    server.listen(PORT, async (error) => {
      if (error) {
        return error;
      }
    
      return console.log(`server started on port here ${PORT}`);
    });
});

//test comment
