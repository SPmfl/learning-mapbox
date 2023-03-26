const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config();

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
}); 