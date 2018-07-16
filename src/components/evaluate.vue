<template>
    <div class="evaluate_warp">
        <div class="evaluate_tab flex_wrap">
            <h4 v-for="(item,index) in tab" :key="index" @click="tabClick(index)" :class="tabActive==index?'active':''">
                {{item.title}}
            </h4>
        </div>
        <div class="evaluate_tab">
            <ul v-infinite-scroll="loadMore" class="evaluate_list" v-for="(item,index) in evaluateList" :key="index"
                infinite-scroll-disabled="loading"  :class="tabActive==index?'active':''"
                infinite-scroll-distance="10">
                <li class="evaluate_item flex_wrap"  v-for="(items,key) in item" :key="key" >
                    <div class="evaluate_item_head flex_nowrap">
                        <div class="flex_nowrap">
                            <img src="../assets/portrait.jpg" alt="">
                        </div>
                        <p>k</p>
                        <h5>{{date|datefun}}</h5>
                    </div>
                    <div class="evaluate_item_cont">
                        <h3>{{items.content}}</h3>
                        <div class="flex_wrap evaluate_img">
                            <img src="../assets/evaluate.jpg" alt="">
                            <img src="../assets/evaluate.jpg" alt="">
                        </div>
                    </div>
                </li>
                <li class="nomore" v-if="!tab[tabActive].more">没有更多数据！</li>
                <p  class="page-infinite-loading flex_nowrap"  v-show="loading"  v-if="tab[tabActive].more">
                    <mt-spinner type="fading-circle"></mt-spinner>
                    加载中...
                </p>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tab:[
                {
                    title:"所有",
                    page:1,//每个栏目下第几页评价
                    more:true,//是否具有更多数据
                },
                {
                    title:"好评",
                    page:1,
                    more:true
                },
                {
                    title:"中评",
                    page:1,
                    more:true
                },
                {
                    title:"差评",
                    page:1,
                    more:true
                },
                {
                    title:"有图",
                    page:1,
                    more:true
                }
            ],
            tabActive:0,//活动的选项卡下标
            evaluateurl:this.GLOBAL.url.evaluateurl,//评论请求路径
            page:1,//第几页评价
            pageSize:8,//每页数据条数
            evaluateList:[],//评价内容
            date:Date.now(),
            loading:false,
        }
    },
    filters: {
        // 时间格式化
        datefun:function (input) {
            var d = new Date(input);
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
            // var hour = d.getHours();
            // var minutes = d.getMinutes();
            // var seconds = d.getSeconds();
            return year+ '-' + month + '-' + day ;
            //  +' ' + hour + ':' + minutes + ':' + seconds;
        }
    },
    methods:{
        // 点击切换选项卡
        tabClick:function(index){
            this.tabActive=index;
        },
        // 对应选项卡内容
        getrecommend:function(id){
            let that=this;
            let evaluateurl=that.evaluateurl;
            let key=id;
            let _data={};
            if(id==0){
                // 所有的评价
                _data={
                    page:that.page,
                    pageSize:that.pageSize
                };
            }else{
                //其他分类评价，限制id在允许范围之内
                if(id>0 && id<5){
                    --id;
                    _data={
                        page:that.page,
                        pageSize:that.pageSize,
                        type:id
                    };
                }
            }
            // console.log(_data);
            this.$http({
                method: 'get',
                url: evaluateurl,
                params: _data,
            })
            .then(function (res) {
                //  console.log(res.data.data);
                // 如果返回数据小于每页limit时，关闭加载更多按钮
                if(res.data.data.length<that.pageSize){
                    that.tab[key].more=false;
                }
                // that.evaluateList[key]=res.data.data;
                that.$set(that.evaluateList,key,res.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        // 加载更多
        loadMore() {
            this.loading = true;
            let tabActive=this.tabActive;
                setTimeout(() => {
                    if( this.tab[tabActive].more==true){
                        this.getMoreData(tabActive);
                    }
                this.loading = false;
                }, 2500);
        },
        getMoreData:function(id){
            let that=this;
            let evaluateurl=that.evaluateurl;
            let key=id;
            let page=that.tab[key].page;
            ++page;
            that.tab[key].page=page;
            let _data={};
            if(id==0){
                // 所有的评价
                _data={
                    page:page,
                    pageSize:that.pageSize
                };
            }else{
                //其他分类评价，限制id在允许范围之内
                if(id>0 && id<5){
                    --id;
                    _data={
                        page:page,
                        pageSize:that.pageSize,
                        type:id
                    };
                }
            }
            this.$http({
                method: 'get',
                url: evaluateurl,
                params: _data,
            })
            .then(function (res) {
                // console.log(res.data.data);
                // that.evaluateList[tabActive]=that.evaluateList[tabActive].concat(res.data.data);
                let arr=that.evaluateList[key].concat(res.data.data);
                // 如果返回数据小于每页limit时，关闭加载更多按钮
                let leng=res.data.data.length;
                if(leng < that.pageSize){
                    that.tab[key].more=false;
                }
                that.$set(that.evaluateList,key,arr);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    created:function(){
        this.getrecommend("0");
        this.getrecommend("1");
        this.getrecommend("2");
        this.getrecommend("3");
        this.getrecommend("4");
    }
}
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");
    .evaluate_warp{
        background: #fff;
        .evaluate_tab{
            h4{
                width: 23%;
                text-align: center;
                border: 1px solid #666;
                color: #666;
                border-radius: 3px;
                display: inline-block;
                float: left;
                font-size: 0.28rem;
                margin:0.4rem 1% 0;
                padding: 0.1rem;
                box-sizing: border-box;
                .transition(all,0.5s,linear);
                &.active{
                    border-color: #ef5b5b;
                    color: #ef5b5b;
                }
            }
        }
        .evaluate_tab{
            .evaluate_list{
                display: none;
                margin-top: 0.2rem;
                border-top: 10px solid #e6e6e6;
                &.active{
                    display: block;
                }
                .evaluate_item{
                    border-bottom: 10px solid #e6e6e6;
                    .evaluate_item_head{
                        padding: 0.2rem 0;
                        border-bottom: 1px solid #e6e6e6;
                        margin-bottom: 0.2rem;
                        align-items: center;
                        justify-content: center;
                        div{
                            align-items: center;
                            justify-content: center;
                            box-sizing: border-box;
                            width: 10%;
                            padding-right: 0.2rem;
                            img{
                                width: 100%;
                                display: block;
                                border-radius: 50px;
                            }
                        }
                        p{
                            width:60%;
                            font-size: 0.24rem;
                        }
                        h5{
                            width: 20%;
                            font-size: 0.24rem;
                            text-align: right;
                        }
                    }
                    .evaluate_item_cont{
                        width: 80%;
                        margin: 0 auto 0.3rem;
                        padding-left: 10%;
                        h3{
                            font-size: 0.2rem;
                            margin-top: 0;
                            margin-bottom: 0.2rem;
                            color: #8f8f94;
                        }
                        .evaluate_img{
                            img{
                                padding-right: 10px;
                                width: 1.5rem;
                                height:1.2rem;
                                margin-bottom: 0.2rem;
                            }
                        }
                    }
                }
            }
        }
        .nomore{
            text-align: center;
            color: #ef5b5b;
            font-size: 0.2rem;
            padding: 0.2rem 0;
        }
    }
    .page-infinite-loading{
        text-align: center;
        font-size: 0.24rem;
        padding: 0.2rem 0;
        align-items: center;
        justify-content: center;
    }
</style>