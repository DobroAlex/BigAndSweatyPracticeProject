const mongoose = require('mongoose');
const api = {};
api.setup = (User) => (req,res) =>  /*Метод setup позволяет создать учётную запись администратора, нужную для отладочных целей. 
В готовом приложении этой учётной записи быть не должно.*/
{
    const admin = new User({
        username: 'admin',
        password: 'admin',
        UserInfo:   []
    });
    admin.save (error => {
        if (error)
        {
            throw error;
        }
        console.log ('Admin akk was succesfully set up, m8');
        res.json({success:true});
    })
}
/*метод, применяемый для тестовых целей, 
позволяющий вывести список всех пользователей, 
которые зарегистрировались в приложении, 
и нужный для проверки механизмов аутентификации:*/
api.index = (User, BAPPToken) => (req,res) =>{
    const token = BAPPToken;
    if (token)
    {
        User.find({}, (error,users) => {
            if (error)
            {
                throw error;
            }
            res.status(200).json(users);
        });
    }
    else 
    {
        return res.status(403).send({success:false, message: 'Unauthorized accsess'});
    }
}
/* создадим метод signup,  понадобится позже. 
Он предназначен для регистрации новых пользователей:*/
api.signup = (User) => (req, res) => {
    if (!req.body.username || !req.body.password)
    {
        res.json({ success: false, message: 'Please, pass a username and password.' });
    }
    else {
      const newUser = new User({
        username:   req.body.username,
        password:   req.body.password,
        UserInfo:   []
      });
      newUser.save((error) => {
        if (error) 
        {
            return res.status(400).json({ success: false, message:  'Username is not unique.' });
        }
        res.json({ success: true, message: 'Account created successfully' });
      })
    }
} /*Тут проверяется, при попытке регистрации нового пользователя,
 заполнены ли поля username и password, 
 и если это так, то, при условии, 
 что введено допустимое имя пользователя, 
создаётся новый пользователь.*/
  module.exports = api;