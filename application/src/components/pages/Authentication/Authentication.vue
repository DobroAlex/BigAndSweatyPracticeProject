<template>
    <h1>Halt! Das Ist Auth!</h1>
</template>
<script>
export default {}
</script>

<template>
    <div class="1-auth-container">
        <div class="1-auth">
            <v-form v-model="validLogin">
                <v-text-field   label="Username"
                                v-model="credentials.username"
                                prepend-icon="account_box"
                                :rules="rules"
                                required
                                color="deep-purple lighten-1">
                </v-text-field>
                <v-text-field   label="Password"
                                v-model="credentials.password"
                                prepend-icon="lock"
                                :rules="rules"
                                :append-icon="loginPasswordVisible ? 'visibility' : 'visibility_off'"
                                :append-icon-cb="() => (loginPasswordVisible = !loginPasswordVisible)"
                                :type="loginPasswordVisible ? 'text' : 'password'"
                                color="deep-purple lighten-1">
                                 required>
                </v-text-field>   
                <v-btn flat color="deep-purple lighten-1" @click.native="signUpVisible = true">Push me to create account</v-btn>
                 <v-btn color="deep-purple lighten-1" @click.native="submitAuthentication()">Push me to Log In</v-btn>              
            </v-form>
        </div>
        <div class="1-signup" v-if="signUpVisible">
            <v-form v-model="validSignUp">
                <v-text-field   label="Username"
                                v-model="newUser.username"
                                prepend-icon="account_box"
                                :rules="rules"
                                required
                                color="deep-purple lighten-1">
                </v-text-field>

                <v-text-field   label="Password"
                                v-model="newUser.password"
                                prepend-icon="lock"
                                :rules="rules"
                                :append-icon="signUpPasswordVisible ? 'visibility' : 'visibility_off'"
                                :append-icon-cb="() => (signUpPasswordVisible = !signUpPasswordVisible)"
                                :type="signUpPasswordVisible ? 'text' : 'password'"
                                color="deep-purple lighten-1"
                                required>
                </v-text-field>

                 <v-btn block color="deep-purple lighten-1" @click.native="submitSignUp()">Push Me to Sign Up</v-btn>                
            </v-form>
        </div>
        <v-snackbar timeout="6000"
                    bottom="bottom"
                    color="red lighten-1"
                     v-model="snackbar">
            {{ message }}
        </v-snackbar>    
    </div>
</template>

/* Здесь имеется элемент div с классом l-auth-container, который выполняет роль контейнера. Следом идёт ещё один div с классом l-auth, который содержит структуру элементов для организации формы ввода, в частности, это элемент v-form, привязанный к данным переменной validLogin.

Внутри него находится пара подписанных полей ввода v-text-field, которые привязаны к данным из credentials (мы займёмся этими данными ниже). Поля снабжены иконками, взятыми из https://material.io/icons/, с ними также связаны правила по проверке ввода (и там и там — одни и те же правила, не будем усложнять проект), кроме того, оба эти поля являются обязательными.

Второе поле ввода предназначено для пароля, оно снабжено иконкой, которая указывает на то, может ли пользователь видеть вводимый пароль. У этой иконки есть коллбэк, являющийся стрелочной функцией, который позволяет переключать значение переменной loginPasswordVisible с true на false и наоборот. Если эта переменная установлена в true, то параметр type поля ввода устанавливается в text, иначе это password.

И, наконец, тут присутствуют описания кнопок, которые мы используем для создания новой учётной записи или для отправки формы с целью входа в систему.

Следующий фрагмент кода описывает структуру формы регистрации в системе, которая видна лишь в том случае, если переменная signUpVisible установлена в true. Устройство этой формы похоже на устройство формы входа в систему, тут изменены лишь несколько строк. В частности, здесь используется переменная signUpPasswordVisible вместо loginPasswordVisible и другой метод обработки щелчка по кнопке.

Далее, тут имеется панель v-snackbar, которая, в ходе аутентификации, используется для вывода сообщений. */