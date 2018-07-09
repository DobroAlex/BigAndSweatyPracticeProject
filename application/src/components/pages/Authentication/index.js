import Axios from 'axios'
import router from '@/router'

const BAPPAPI = `http://${window.location.hostname}:3001`

export default {
  user: { authenticated: false },

  authenticate (context, credentials, redirect) {
    Axios.post(`${BAPPAPI}/api/v1/auth`, credentials)
      .then(({data}) => {
        context.$cookie.set('token', data.token, '1D')
        context.$cookie.set('user_id', data.user._id, '1D')
        context.validLogin = true

        this.user.authenticated = true

        if (redirect) router.push(redirect)
      }).catch(({response: {data}}) => {
        context.snackbar = true
        context.message = data.message
      })
  },

  signup (context, credentials, redirect) {
    Axios.post(`${BAPPAPI}/api/v1/signup`, credentials)
      .then(() => {
        context.validSignUp = true

        this.authenticate(context, credentials, redirect)
      }).catch(({response: {data}}) => {
        context.snackbar = true
        context.message = data.message
      })
  },
  signout (context, redirect) {
    context.$cookie.delete('token')
    context.$cookie.delete('user_id')
    this.user.authenticated = false

    if (redirect) router.push(redirect)
  },
  checkAuthentication () {
    const token = document.cookie
    this.user.authenticated = !!token
  },

  getAuthenticationHeader (context) {
    return `Bearer ${context.$cookie.get('token')}`
  }
}
/* context: это — компонент Vue.
credentials: тут будут имя пользователя (username) и пароль (password).
redirect: здесь будет путь, по которому мы собираемся перенаправить пользователя. */

/* Axios используется здесь для выполнения POST-запроса к API с передачей аргумента credentials. Затем мы деструктурируем ответ, data, так как нас здесь интересует лишь значение token, сохраняем это значение в куки-файле и задаём срок жизни этих данных, равный одному дню. Также мы устанавливаем в true переменную validLogin и значение authenticated объекта user, и, наконец, перенаправляем пользователя по пути из аргумента redirect.

В противном случае мы устанавливаем поле snackbar объекта context в true и записываем в message сообщение об ошибке. */

/* Второй метод очень похож на первый, его мы используем для создания новой учётной записи. Разница между ним и первым методом заключается в конечной точке, с которой мы работаем.
Третий метод используется для проверки того, аутентифицирован пользователь или нет.
Последний метод позволяет возвратить заголовок Authorization.
*/
