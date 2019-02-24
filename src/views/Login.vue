<template>
  <div class="login">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="form.username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
    <!-- <mt-radio v-model="form.value" :options="['记住我']"></mt-radio> -->
    <mt-switch v-model="form.rememberMe">记住我</mt-switch>
    <mt-button size="large" type="primary" style="margin-top:50px" @click="login">登录</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import qs from "qs"
import api from "../api"
export default {
    data(){
        return{
            form:{
                username:"",
                password:"",
                rememberMe:true
                
            }
        }
    },
    methods:{
        login(){
            console.log(qs.stringify(this.form));
            api.login(this.form).then(res=>{
                console.log(res.code);
                console.log(res);
                if(res.code==0){
                    Toast(res.msg);
                    this.$router.push("/home")
                }else{
                    Toast(res.msg);
                }
            })
        }
    }
}

</script>
<style lang="stylus" scoped>
/deep/ .mint-cell-title
   text-align left
.login
   padding:20px
</style>