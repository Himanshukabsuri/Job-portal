import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js'


//initize express

const app = express()

//connect to database

await connectDb()

// middleware 

app.use(cors())
app.use(express.json())

//Route
app.get('/',(req,res)=>res.send("Api working"))
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks',clerkWebhooks)



//port

const PORT = process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})