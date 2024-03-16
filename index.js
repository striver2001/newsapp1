import express from 'express';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

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
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
});




const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;



Connection(username, password);

app.listen(PORT, ()=>{
    // Connection();
    console.log(`server is running on port ${PORT}`);

});

DefaultData();