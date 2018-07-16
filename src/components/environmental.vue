<template>
    <div class="environmental_warp">
        <h2>{{environmentalTitle}}</h2>
        <div v-for="(item,index) in environmentalList" :key="index">
            <h6>{{item.title}}</h6>
            <h6>{{item.info}}</h6>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            environmentalTitle:"环境设施",
            environmentalList:[
                {
                    title:"网络",
                    info:"课室WIFI免费房间内高速上网公共区WIFI免费"
                },
                {
                    title:"交通设施",
                    info:"免费停车场"
                },
                {
                    title:"交通服务",
                    info:"接机服务接站服务租车服务叫车服务"
                },
                {
                    title:"休闲娱乐",
                    info:"室内游泳池健身室SPA棋牌室"
                },
                {
                    title:"前台服务",
                    info:"行李寄存24小时前台24小时大堂经理专职行李员礼宾服务免费旅游"
                }
            ]
        }
    },
}
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");

    .environmental_warp{
        border-top: 0.2rem solid #f5f5f0;
        background: #fff;
        padding: 0.2rem 0.3rem 0.2rem;
        h2{
            padding-bottom: 0.4rem;
            color: #b2b2b2;
        }
        h6{
            color: #686868;
            line-height: 0.5rem;
        }
    }
</style>
