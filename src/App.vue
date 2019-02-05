<template>
  <div id="app">
    <el-row class="container" style="height: 100%">
      <el-col :span="24" class="main">
        <el-row>
          <el-menu :default-active="this.$route.path" class="mar-l el-menu-vertical-demo el-col el-col-3" light router>
            <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
              <el-menu-item :index="item.path">
                <i class="fa" :class="item.class"></i>
                {{item.name}}
              </el-menu-item>
            </template>
          </el-menu>
          <section class="contentCon">
            <el-col :span="21" :offset="3" class="content-wrapper">
              <transition>
                <router-view></router-view>
              </transition>
            </el-col>
          </section>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
i.fa {
  vertical-align: baseline;
  margin-right: 10px;
}
body {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  background-color: #f2f2f2;
}
.menu,
.el-menu {
  height: 100%;
  background-color: #e6e6e6;
  position: fixed;
  float: left;
}
.container {
  padding-top: 80px;
  height: 100%;
}
.container .main {
  padding: 0;
}
.container ul li.el-menu-item {
  font-size: 100%;
}
.container .mar-l {
  padding: 0;
}
.container .content-wrapper {
  padding: 20px;
}
</style>
