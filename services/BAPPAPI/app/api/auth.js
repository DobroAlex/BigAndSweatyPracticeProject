const momgoose = require('mongoose'),
    jwt = require ('jsonwebtoken'),
    config = require('@config');
/*Тут мы создаём пустой объект api, в котором сохраним все необходимые методы. В метод login сначала передаём аргумент User, так как тут нужен метод для доступа к модели User, затем передаём аргументы req и res.

Этот метод выполняет поиск объекта User, который соответствует имени пользователя (username). Если имя пользователя распознать не удаётся, выдаём ошибку, в противном случае проверяем пароль и токен, привязанные к пользователю.*/

const api = {};

api.login = (User) => (req, res) => {
    User.findOne({ username: req.body.username }, (error, user) => {
      if (error)
      {
           throw error;
      }
  
      if (!user) res.status(401).send({ success: false, message: 'Authentication failed. User not found.' });
      else {
        user.comparePassword(req.body.password, (error, matches) => {
          if (matches && !error) {
            const token = jwt.sign({ user }, config.secret);
            res.json({ success: true, message: 'Token granted', token });
          } 
          else {
            res.status(401).send({ success: false, message: 'Authentication failed. Wrong password.' });
          }
        });
      }
    });
  }
  /*Теперь нужен ещё один метод api, который будет получать и парсить токен:*/

api.verify = (headers) =>
{
    if (headers && headers.authorization)
    {
        const split = headers.authorization.split(' ');
        if (split.length === 2)
        {
            return split[1];
        }
        else
        {
            return null;
        }
    }
    else
    {
        return null;
    }
} /*Этот метод проверяет заголовки и получает заголовок Authorization*/
/*можем экспортировать объект api:*/
module.exports = api;