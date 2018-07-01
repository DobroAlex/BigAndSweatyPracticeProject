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