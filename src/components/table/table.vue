<template>
  <section>
    <el-row>
      <el-col :span="24">
        <!-- 表单 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="姓名">
            <el-input v-model="formInline.user.name" placeholder="姓名" style="width:140px;"></el-input>
          </el-form-item>
          <el-form-item label="年份">
            <el-date-picker v-model="formInline.user.date" align="right" type="year" placeholder="选择年份"></el-date-picker>
          </el-form-item>
          <el-form-item label="地址">
            <el-cascader expand-trigger="hover" :options="options" v-model="formInline.user.address"></el-cascader>
          </el-form-item>
          <el-form-item label="籍贯">
            <el-select v-model="formInline.user.place" placeholder="请选择">
              <el-option v-for="item in places" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <a href="javascript:;" id="download" style="background-color:#409EFF;color:#fff;padding:12px 10px!important;margin-left:10px!important;border-radius:4px" @click="download()" download="download.csv">导出数据</a>
        </el-form>
        <!-- 表格 -->
        <el-table :data="tableData" border style="width:100%">
          <el-table-column type="selection"></el-table-column>
          <el-table-column prop="date" label="出生日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
				<div class="block">

				</div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: {
          name: '',
          date: '',
          address: '',
          place: ''
        }
      },
      tableData: [{
        name: '1',
        address: '1',
        date: '1',
      }],
      options: [],
      places: [],
      dialogFormVisible: false,
      editLoading: false,
      form: {
        name: '',
        address: '',
        date: '',
      },
      currentPage: 4,
      table_index: 999,
    };
  },
  methods: {
    onSubmit() {
      this.$message('mock data, the method is not function');
    },
    handleDelete(index, row) {

    },
    handleEdit(index, row) {

    },
  }
}
</script>
<style>
</style>
