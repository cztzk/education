<template>
    <header>
        <span v-show="!isindex" class="icon iconfont icon-fanhui" @click="backfun"></span>
        <span>{{title}}</span>
    </header>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:[
        "title",
        "isindex"
    ],
    methods:{
        backfun:function(){
            history.back(-1);
        }
    }
}
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");

    header{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 99;
        background-color: #26a2ff;
        color: #fff;
        height: 1rem;
        font-size: 0.4rem;
        text-align: center;
        span{
            line-height: 1rem;
            &:nth-child(1){
                position: absolute;
                z-index: 100;
                left: 0.15rem;
            }
        }
    }
</style>
