<template>
  <div id="app">
    <mt-header fixed title="欢迎使用笑缘短信提醒系统"></mt-header>
    <router-view/>
  </div>
</template>
<style lang="stylus">
@import "./assets/varibles.styl"
*{
  margin:0
  padding:0
}
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  padding-top 44px
ul li
  list-style none
a
  text-decoration none
  color #666
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #fff
      background:$bgColor
</style>
