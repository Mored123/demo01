<template>
  <div class="home">
    <el-container class="home-container">
      <!-- 侧边栏 -->
      <el-aside width="200px" class="aside">
        <!-- 左侧导航 -->
        <Nav/>
      </el-aside>
      
      <el-container>
        <!-- 头部 -->
        <el-header>
          <!-- 面包屑 -->
          <Breadcumb/>
          <el-button type="info">退出</el-button>
        </el-header>
        <!-- 主体 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Nav from './Nav'
  import Breadcumb from './Breadcumb'
  export default {
    name: 'home',
    props: {
      msg: String
    },
    components:{Nav,Breadcumb}
  }
</script>

<style >
  .home{
    height: 100%;
  }
  .home-container{
    height: 100%;
  }
  .el-header{
    background-color: #B3C0D1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-breadcrumb-item{
    font-size: 30px;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #333F51;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #F9F9F9;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
