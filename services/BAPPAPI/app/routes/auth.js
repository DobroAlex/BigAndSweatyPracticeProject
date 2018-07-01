/*В этот модуль мы передаём объект app, 
благодаря чему можно установить маршруты.
Здесь же мы задаём константу api,
которую используем для работы с файлом auth.js в папке api.
   Тут мы задаём маршрут по умолчанию, '/', 
   при обращении к которому пользователю передаётся строка 
   «BAPP API». 
   Тут же создаём маршрут '/api/v1/auth' 
   (для работы с которым применяется POST-запрос). 
   Для обслуживания этого маршрута используем метод login, 
   передавая модель User как аргумент.
   */

const models = require('@BAPPManager/app/setup');
module.exports = (app) => {
    const api = app.BAPPAPI.api.api.auth;
    app.route('/')
        .get((req,res)=>res.send('BAPP API'));
    app.route('/api/v1/auth')
        .post(api.login(models.User));
}