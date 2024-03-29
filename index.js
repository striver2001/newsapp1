import express from 'express';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
dotenv.config();
const PORT =  process.env.PORT || 8000;


app.use(cors({
    origin: "http://localhost:3000"
}));
                            
app.use('/', Route );


// static files 

app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
});




// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;
const MONGODB_URL = process.env.URL;



Connection(MONGODB_URL);

app.listen(PORT, ()=>{
    // Connection();
    console.log(`server is running on port ${PORT}`);

});

DefaultData();