<template>
    <el-menu
        background-color="#333F51"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <NavItem v-for="(item,i) in items" :key="i" :item="item"/>
    </el-menu>
</template>

<script>
    import NavItem from './NavItem'
    export default {
        name:'Nav',
        data(){
            return {
                items:[
                    {
                        title:'首页',
                        url:'/index'
                    },
                    {
                        title:'财务管理',
                        url:'/index',
                        child:[
                            {
                                title:'支出管理',
                                url:'/'
                            },
                            {
                                title:'收入管理',
                                url:'/'
                            },
                            {
                                title:'统计报表',
                                url:'/'
                            },
                            {
                                title:'预算管理',
                                url:'/'
                            },
                            {
                                title:'佣金流水',
                                url:'/'
                            },
                        ]
                    },
                    
                ]
            }
        },
        components:{
            NavItem
        }
    }
</script>

<style>

</style>