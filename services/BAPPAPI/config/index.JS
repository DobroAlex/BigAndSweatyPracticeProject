module.exports = {
    secret: 'budgetsecret',
    session: { session: false },
    database: 'mongodb://127.0.0.1:27017/budgetmanager'
  }
  /*Этот файл содержит параметры подключения к базе данных
   и секретный ключ, который мы используем для создания
    JWT-токенов.

Здесь предполагается работа с локальным сервером MongoDB.
 При этом в строке 127.0.0.1:27017 можно использовать localhost.
  */

require('module-alias/register');
const http = require('http'),
    BAPPAPI = require('@BAPPAPI'),
    BAPPServer = http.Server(BAPPAPI),
    BAPPPORT = process.env.PORT || 3001,
    LOCAL = '0.0.0.0';
BAPPServer.listen(BAPPPORT, LOCAL, ()=> console.log('BAPP API running on ${BAPPPORT}'));
/*Для запуска сервера, надо перейти в корневую директорию проекта и ввести 'node services' в cmd*/