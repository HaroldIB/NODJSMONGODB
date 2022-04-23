import app from './app';
import { Server as WebsocketServer } from 'socket.io';
import http from 'http';
import { connectDB } from './db';
import sockets from './sockets';
import { PORT } from "./config"

connectDB();

const server = http.createServer(app);
const httpserver = server.listen(PORT);
console.log("Escuchado Servidor en Puerto ", PORT);

const io = new WebsocketServer(httpserver)
sockets(io);
