require('dotenv').config()
const express = require('express');
/* NEW FOR SOCKET IO */
/* import { createServer } from "http"; */

const { createServer } = require('http');

const { Server } = require("socket.io");

const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

const httpServer = createServer(app);
const io = new Server(httpServer);

require('./config/mongoose.config');


app.use(cookieParser());

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000"]
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));



const sessionRoutes = require('./routes/session.routes');
app.use("/api/session", sessionRoutes);

const userRoutes = require('./routes/user.routes');
app.use("/api/user", userRoutes);

io.on('connection', (socket) => {
    console.log('socket connected', socket.id);

});

io.of("/admin").on("connection", (socket) => {
    console.log('Admin socket connected', socket.id);
});

const manager = io.of("/chat").on("connection", (socket) => {
    console.log('Chat socket connected', socket.id);
    socket.broadcast.emit("join","new chat member");
    
    socket.on("join", function (roomid) {
        console.log('Chat socket connected', roomid);
        socket.join(roomid);
 
        manager.to(roomid).emit('testsocket', "connected to " + roomid);
        socket.to(roomid).emit('testsocket',`${socket.id} joined the chat`);
    });
});

httpServer.listen(port, () => console.log(`Listening on port: ${port}`));

