const PassportJWT = require('passport-jwt'),
    ExtractJWT = PassportJWT.ExtractJwt,
    Strategy = PassportJWT.Strategy,
    config = require('./index.js'),
    models = require('@BAPP/app/setup');

/*Тут мы создаём экземпляр модели User и находим пользователя, 
выполняя поиск по JWT-токену, полученному от клиента.*/
module.exports = (passport) => {
    const User = models.User;
    const parametrs = {
        secretOrKey: config.secret,
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    };
    passport.use(new Strategy(parametrs, (payload, done) => {
        User.findOne({id:payload.id}, (error, user) =>  {
            if (error) return done(error,false);
            if (user) done (null, user);
            else done(null, false);
        });
    }));
}