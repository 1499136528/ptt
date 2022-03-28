<template>
  <div>
    <el-container>
      <el-aside
        style="background-color: rgb(50, 64, 87)"
        
        class="aside"
        
      >
        <el-menu background-color="rgb(50,64,87)" text-color="#ffffff" :router="true">
          <el-menu-item index="/home" class="item">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2" class="item">
            <template slot="title"
              ><i class="el-icon-document-remove"></i
              ><span>数据管理</span></template
            >
            <el-menu-item index="2-1">用户列表</el-menu-item>
            <el-menu-item index="2-2">商家列表</el-menu-item>
            <el-menu-item index="2-3">食品列表</el-menu-item>
            <el-menu-item index="2-4">订单列表</el-menu-item>
            <el-menu-item index="2-5">管理员列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in this.$route.meta" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          <el-dropdown>
            <span class="el-dropdown-link">
              <img src="../assets/logo.png" alt="" class="img" />
            </span>
            <el-dropdown-menu slot="dropdown" class>
              <el-dropdown-item>登录</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
.aside {
  height: 100vh;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  background: #eff2f7;
}
.header img {
  width: 32px;
  height: 32px;
}
</style>
