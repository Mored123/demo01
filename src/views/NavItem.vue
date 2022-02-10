<template>
    <div>
        <!-- 有子集 -->
        <el-menu-item :index="item.url" v-if="!item.child">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.title}}</span>
        </el-menu-item>
        <!-- 无子集 -->
        <el-submenu index="item.url" v-else>
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>财务管理</span>
            </template>
            <el-menu-item :index="kid.url" v-for="(kid,i) in item.child" :key = "i">{{kid.title}}</el-menu-item>
        </el-submenu>
        <!-- 递归 -->
        <NavItem v-for="(v,i) in item.child" :key="i" :item="v"/>
    </div>
</template>

<script>
export default {
    name:'Nav',
    data(){
        return {
            
        }
    },
    props:['item']
}
</script>

<style>

</style>