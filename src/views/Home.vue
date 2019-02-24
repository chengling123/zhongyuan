<template>
  <div class="home">
    <div class="userinfo">
      <div class="userinfo_lef">
        <div><img src="https://images.gitee.com/uploads/38/2177038_chenglingling.png!avatar100?1536823399" alt=""></div>
        <div>
          <p><router-link to="/login">登录</router-link> </p>
          <p>IP:{{userList.loginIp}}</p>
        </div>
      </div>
    </div>
    <mt-cell :title="userList.userName"><img slot="icon" src="../assets/user.png" width="16" height="16"></mt-cell>
    <mt-cell :title="userList.phonenumber"><img slot="icon" src="../assets/user.png" width="16" height="16"></mt-cell>
    <mt-cell :title="userList.deptName"><img slot="icon" src="../assets/user.png" width="16" height="16"></mt-cell>
    <mt-cell :title="userList.sex"><img slot="icon" src="../assets/user.png" width="16" height="16"></mt-cell>
    <mt-cell :title="userList.email"><img slot="icon" src="../assets/user.png" width="16" height="16"></mt-cell>
    <mt-cell :title="userList.loginDate"><img slot="icon" src="../assets/user.png" width="16" height="16"></mt-cell>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import axios from "axios"
import api from "../api"
import FooterNav from "../components/FooterNav"
export default {
  name: 'home',
  data(){
    return{
      userList:{},
    }
  },
  methods:{
    mine(){
      api.mine({userId:"1812120000000000"}).then(res=>{
        this.userList=res;
      })
    }
  },
  mounted(){
    this.mine();
  },
  components:{
    FooterNav,
  }
  
}
</script>
<style lang="stylus" scoped>
@import "~@/assets/varibles.styl";
.home
  text-align :left
  .userinfo
    background :$bgColor
    color:#fff
    .userinfo_lef
      display :flex
      align-items :center
      a
        color:#fff
      img 
        border-radius :50%
        width:80%
</style>

