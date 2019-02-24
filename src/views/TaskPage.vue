<template>
  <div class="tasklist">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题:">
        <el-input v-model="form.matter"></el-input>
      </el-form-item>
      <el-form-item label="内容:">
        <el-input v-model="form.remark"></el-input>
      </el-form-item>
      <el-form-item label="任务时间:">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" 
              format="yyyy-MM-dd" value-format="yyyy-MM-dd"
              v-model="form.warnTime" style="width: 100%;">
          </el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            type="fixed-time"
            placeholder="选择时间"
            v-model="form.date2"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">添加任务</el-button>
    </el-form>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import api from "../api"
import FooterNav from "../components/FooterNav";
export default {
  name: "home",
  data() {
    return {
      form: {
          matter:"",
          warnTime:"",
          remark:"",
          date2:"",
          userId:"1812120000000000",
          startUsing:1
      }
    };
  },
  methods: {
    onSubmit() {
        console.log(this.form.warnTime)
        api.task(this.form).then(res=>{
          console.log(res);
        })
    }
  },
  components: {
    FooterNav
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/varibles.styl';
.tasklist 
  padding: 20px 10px
.el-button
  width:94%
  margin:40px auto

</style>