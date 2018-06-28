const mongoose = require('mongoose'),
      bcrypt = require('bcrypt');

/* Этот код предназначен для создания схемы данных User. Благодаря этому описанию за пользователем нашей системы будут закреплены следующие данные:

    Имя пользователя (username).
    Пароль (password).
    Сведения о юзере (clients). */

/*В сведениях о юзере будут  входить Имя (name), фамилия (lastname), телефон(phone), город (city) */
const Schema = mongoose.Schema({
    username:   {
        type: String,
        unique: true,
        required: true
    },
    password:   {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    UserInfo: [{}]
})      
/*В этой функции мы генерируем крипто-соль
 и хэш для паролей пользователей. */
 // Здесь не будем пользоваться стрелочными функциями из-за автоматической привязки к лексической области видимости
 Schema.pre('save', function (next) {
    const user = this;
    if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, (error, salt) => {
      if (error) return next(error);
      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) return next(error);
        user.password = hash;
          next();
        });
      });
    } else {
      return next();
    }
  });
  /* добавим функцию, которая будет сравнивать 
  пароли, проверяя правомерность доступа пользователя к системе: */
Schema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, (error, mathces) => {
        if (error) return callback(error);
        callback(null, mathces);
    });
};