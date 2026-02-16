// importing all dependecies

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import path from 'path'

import storageRoutes from './src/routes/storageRoutes.js'

const app = express();
const __dirname = path.resolve();



// middlewware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json());

// connecting mongo DB to server
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDB connected succesfully");
    } catch (err) {
        console.error('connection Failed', err.message);
        process.exit(1);
    }
}
connectDB();

//routes
app.use('/api/storage', storageRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*any", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


app.get('/', (req,res) =>res.send('API is ruunning'));

//server status
app.listen(5000, () => console.log('server running at 5000'));
    
