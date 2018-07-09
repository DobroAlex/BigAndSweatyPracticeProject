<template>
  <div id="app">
    <v-container>
      <router-view/>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script> <!--/*Newline required at end of file http://eslint.org/docs/rules/eol-last*/
//импортируем ранее подготовленные стили scss и задаём использование фиксированного фонового изображения для приложения. Мы стремимся к тому, чтобы на любом устройстве экран приложения выглядел примерно одинаково.
-->
<!--//В псевдоэлементе body :after мы задаём параметр background-color, записывая в него значение переменной $background-tint. Это позволит применить к фоновому изображению фуксивый цветной фильтр. -->
<style lang = "scss">
  @import "./assets/styles";
  body {
    background: url('./assets/images/background.jpg') no-repeat center center fixed;
    &:after  {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: $background-tint;
      opacity: .3;
      z-index: -1;
    }
  }
</style>