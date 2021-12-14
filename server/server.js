const express = require('express');

// const path          = require('path');
//const bodyParser    = require('body-parser'); 
const cors          = require('cors');

const dotenv        = require('dotenv');
const mongoose      = require('mongoose');

//Import Routes
const pageRoute     = require('./routes/pageRoute');
const formRoute     = require('./routes/formRoute');

const app = express();

dotenv.config();

//parse the data
app.use(express.json());
app.use(cors())

app.use('/', pageRoute);
app.use('/form', formRoute);


const PORT = process.env.PORT || 5000
//Connect to DB
mongoose.connect( process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false) //make sure that we don't get any warnings