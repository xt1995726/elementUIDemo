<template>
  <div id="app">
    <el-row class="container" style="height: 100%">
      <el-col :span="24" class="main">
        <el-row>
          <el-menu :default-active="$route.path" class="mar-l el-menu-vertical-demo el-col el-col-3" light router>
            <template v-for="(item,index) in $router.options.routes[0].children" v-if="!item.hidden">
              <el-menu-item :index="item.path">
                <i class="fa" :class="item.class"></i>
                {{item.name}}
              </el-menu-item>
            </template>
          </el-menu>
        </el-row>
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  background-color: #f2f2f2;
}
</style>
