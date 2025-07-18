import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import http from 'http';
import { connectDB } from './lib/db.js';
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import { Server } from 'socket.io';

//create an express app and http servet
const app = express();
const server = http.createServer(app);

//initialize socket.io server
export const io = new Server(server, {
    cors: {origin: "*"}
});

//store online user
export const userSocketmap = {}; //{userId, socketId}

//socket.io connection handler
io.on("connection", (socket)=>{
    const userId = socket.handshake.query.userId;
    console.log("User Connected", userId);
    
    if(userId) userSocketmap[userId] = socket.id

    //Emit online user to all conected clients
    io.emit("getOnlineUsers", Object.keys(userSocketmap))

    socket.on("disconnect", ()=>{
        console.log("User Disconnected", userId);
        delete userSocketmap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketmap))
        
    })
})

//Middleware setup
app.use(express.json({limit:'4mb'}));
app.use(cors());

//Route setup
app.use("/api/status", (req, res)=>res.send('server is live'));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

//connection to mongodb
await connectDB();


const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log('server is running on port: ' + PORT))