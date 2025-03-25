const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/routes');
const cors = require('cors');


const app = express();
const PORT = 3200;
const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(route);



app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
