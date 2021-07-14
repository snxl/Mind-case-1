import createError from 'http-errors';
import express from 'express';
import path from 'path';
import session from "express-session"
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import fs from "fs";
import {fileURLToPath} from "url"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()


import usersRouter from './routes/userRoute.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class App{

    constructor(){
        this.app = express();
        this.checkSecure();
        this.middlewares();
        this.routes();
        this.notFound();
        this.backEndErrors();
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(session({
            secret: process.env.SECRET_SESSION,
            resave: false,
            saveUninitialized: true
        }));
    }

    routes(){
        this.app.use('/users', usersRouter );         
    }

    notFound(){
        this.app.use(function(req, res, next) {
            next(createError(404));
        });
    }

    backEndErrors(){
        this.app.use(function(err, req, res, next) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
          
            // render the error page
            res.status(err.status || 500);
            res.render('error');
          });
    }

    checkSecure(){
        this.app.use((req, res, next)=>{
          if(!req.secure){
    
            res.redirect(`https://localhost:${process.env.PORT_TLS || 3100}${req.url}`);
    
          }
    
          next()
        })
    }
}

export default new App()