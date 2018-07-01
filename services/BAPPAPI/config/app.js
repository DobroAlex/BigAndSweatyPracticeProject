/* подключим зависимости:*/
const express = require ('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    consign = require('consign'),
    cors = require('cors'),
    passport = require('passport'),
    passportConfig = require('./passport') (passport), /*импортируем конфигурационный файл для passport, передавая passport в качестве аргумента*/
    jwt = require('jsonwebtoken'),
    config = require('./index.js'),
    database = require('./database') (mongoose, config);

/*начинаем работу с пакетами и устанавливаем секретный ключ:*/
app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended:    true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());
app.set('BAPPsecret', config.secret);

/*Тут мы проверяем, прежде чем выполнять другие действия, загружено ли содержимое папки setup, благодаря чему в первую очередь будет создан экземпляр модели. Затем загружаем методы API, и наконец — маршруты.*/

consign({cwd:'services'})
    .include ('BAPPManagerAPI/app/setup')
    .then('BAPPAPI/app/api')
    .then('BAPPAPI/app/routes')
    .into(app);
module.exports = app;
