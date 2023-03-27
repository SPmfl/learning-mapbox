const express= require('express');
const morgan = require('morgan');
const cors = require('cors');

const marksRoutes = require('./routes/marks.routes.js');

require('./db/db-connection/db-postgres.js').testDbConnection();
require('./db/db-models/feature.model.js').syncronizeFeature();

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
    res.status(200).send('Geojson Features API - welcome?\n');
});

app.use('/marks', marksRoutes);

app.get('*',(req,res)=>{
    res.status(404).end("404 - page not found - 404");
});

module.exports = app ;
