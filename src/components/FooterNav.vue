<template>
  <div class="footer">
    <ul>
      <li>
        <a href="#/xitong" :class="{active: '/xitong'===$route.path}">
          系统通知
        </a>
      </li>
      <li>
        <a href="#/home" :class="{active: '/home'===$route.path}">
          个人中心
        </a>
      </li>
      <li>
        <a href="#/task"  :class="{active: '/task'===$route.path}">
          任务列表
        </a>
      </li>
     
    </ul>
  </div>
</template>

<script>
  export default {
    name: "FooterPage",
    data(){
      return{
      }
    },
    methods:{
    }

  }
</script>

<style lang="stylus" scoped>
@import "../assets/varibles.styl"
.footer
  background:#fff
  position: fixed
  bottom:0
  width:100%
  border-top:1px solid $bgColor
  ul
    overflow: hidden
    li
      text-align center
      width:33.3%;
      float:left;
      a
        display: block
        padding:7px 0
        font-size:12px
        &.active
           background: $bgColor
           color:#fff




</style>
