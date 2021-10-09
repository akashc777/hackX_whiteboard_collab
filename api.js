const express = require('express');
const cors = require("cors");
const path = require('path');


const api = express();

api.use(cors({ origin: "http://localhost:3000" }));
api.use(express.static(path.join(__dirname, 'public')));



module.exports = api;