<template>
<section class="form-section">
  <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="待办事项" prop="name">
      <el-input></el-input>
    </el-form-item>
    <el-form-item label="事项类型" prop="type">
      <el-radio-group>
        <el-radio label="1">常规</el-radio>
        <el-radio label="2">紧急</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="提醒方式" prop="way">
      <el-checkbox-group>
        <el-checkbox label="短信"></el-checkbox>
        <el-checkbox label="电话"></el-checkbox>
        <el-checkbox label="邮件"></el-checkbox>
        <el-checkbox label="微信"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</section>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .form-section{
    padding: 10px;
    width: 500px;
  }
</style>
