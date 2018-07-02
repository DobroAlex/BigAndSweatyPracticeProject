const mongoose = require('mongoose'),
    UserModel = require('@BAPPModels/user');;
const models = {
    User: mongoose.model('User')
}
module.exports = models; /* обеспечить загрузку моделей до того, как в приложении будет загружено что-то другое.*/
