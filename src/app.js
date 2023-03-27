const express= require('express');
const morgan = require('morgan');
const cors = require('cors');

const markRoutes = require('./routes/marks.routes.js');

const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccesssStatus:200
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.status(200).send('Geojson Features API - welcome?');
});

app.use('/marks', markRoutes );

app.get('*',(req,res)=>{
    res.status(404).end("404 - page not found ");
});

module.exports = app ;
