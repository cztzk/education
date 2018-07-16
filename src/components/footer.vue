<template>
    <footer>
        <ul class="flex_nowrap">
            <router-link :to="item.url" v-for="(item,key) in tabbar" :key="key" :class="key==selected?'active':''" tag="li">
                <span :class="item.icon"></span>
                <h4>{{item.title}}</h4>
            </router-link>
        </ul>
    </footer>
</template>
<script>
export default {
    data(){
        return{
            tabbar:[
                {
                    title:"首页",
                    icon:"icon iconfont icon-shouye",
                    url:"/index"
                },
                {
                    title:"课程",
                    icon:"icon iconfont icon-course",
                    url:"/product"
                },
                 {
                    title:"订单",
                    icon:"icon iconfont icon-single",
                    url:"/order"
                },
                 {
                    title:"我的",
                    icon:"icon iconfont icon-wode",
                    url:"/user"
                },
            ]
        }
    },
    props:[
        "selected"
    ],
    methods:{

    }
}
</script>
<style lang="less" >
@import url("../assets/common/css/common");

    footer{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background: #fff;
        ul.flex_nowrap{
            text-align: center;
            li{
                flex: 1;
                font-size: 0.24rem;
                &.active{
                    color: #b34141;
                }
                span{
                    font-size: 0.5rem;
                    padding-top: 0.1rem;
                }   
                h4{
                    padding: 0.1rem 0;
                    font-size: 0.24rem;
                }
            }
        }
    }
</style>
