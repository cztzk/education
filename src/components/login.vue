<template>
    <div class="login_wrap">
        <div class="login_title">
            <p v-if="islogin">未登录，请登录账号获得更多优惠信息</p>
            <p v-else>未注册，请注册账号获得更多优惠信息</p>
        </div>
        <form class="page-part">
            <mt-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }" v-if="!islogin"
            :state='name.state==null ? "" : ((name.state==true) ? "success" : "error")'
            v-model="name.title" @blur.native.capture="checkName">
             </mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel"   
            :state='phone.state==null ? "" : ((phone.state==true) ? "success" : "error")'
            v-model="phone.title" @blur.native.capture="checkPhone">
            </mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-if="!islogin"
             :state='email.state==null ? "" : ((email.state==true) ? "success" : "error")'
            v-model="email.title" @blur.native.capture="checkEmail">
            </mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" 
            :state='pass.state==null ? "" : ((pass.state==true) ? "success" : "error")'
            v-model="pass.title" @blur.native.capture="checkPass">
            </mt-field>
            <mt-field label="重复密码" placeholder="请输入重复密码" type="password" v-if="!islogin"
            :state='passes.state==null ? "" : ((passes.state==true) ? "success" : "error")'
            v-model="passes.title" @blur.native.capture="checkPasses">
            </mt-field>
            <mt-field label="验证码" placeholder="输入验证码" type="text" v-if="!islogin"
             :state='code.state==null ? "" : ((code.state==true) ? "success" : "error")'
            v-model="code.title" @blur.native.capture="checkcode">
                <img :src="codeimg.img" height="48px" ref="code" width="100px" @click="refreshCode">
            </mt-field>
            <h4 class="msg" v-if="msg.show">{{msg.cont}}</h4>
        </form>
        <div class="login_btn">
            <mt-button type="danger" size="large" v-if="islogin" @click="loginfun">
                登录
            </mt-button>
            <mt-button type="danger" size="large" v-if="islogin" @click="togglefun">
                未有账号，去注册
            </mt-button>
            <mt-button  type="danger" size="large" v-if="!islogin" @click="registeredfun">
                注册
            </mt-button>
            <mt-button type="danger" size="large" v-if="!islogin" @click="togglefun">
                已有账号，去登录
            </mt-button>
        </div>
        <div class="mint-msgbox alert_box" v-if="verification">
            <div class="mint-msgbox-header">
                <div class="mint-msgbox-title">提示</div>
            </div>
            <div class="mint-msgbox-content">
                <div class="mint-msgbox-message">
                    注册成功,即将跳转至登录界面
                </div> 
                <div class="mint-msgbox-input" style="display: none;">
                    <input placeholder="" type="text">
                </div>
            </div> 
            <div class="mint-msgbox-btns">
                <button class="mint-msgbox-btn mint-msgbox-confirm" @click="tologinfun">确定</button>
            </div>
        </div>
        <div class="v-modal" style="z-index: 100;" v-if="verification"></div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
    data(){
        return{
            islogin:true,//判断登录框或注册框 true登录框 false注册框
            verification:false,//是否登录/注册成功
            msg:{
                cont:"错误信息",
                show:false
            },
            name:{
                title:"",
                state:null
            },
            phone:{
                title:"13500000000",
                state:true
            },
            email:{
                title:"",
                state:null
            },
            pass:{
                title:"",
                state:null
            },
            passes:{
                title:"",
                state:null
            },
            code:{
                title:"",
                state:null
            },
            codeimg:{
                num:7364,
                img:require("../assets/code.jpg")
            },
        }
    },
    methods:{
        // 登录注册框切换
        togglefun:function(){
            this.islogin=!this.islogin;
            this.msg.show=false;
        },
        tologinfun:function(){
            this.islogin=true;
            this.msg.show=false;
            this.verification=false;
        },
        // 验证码刷新功能
        refreshCode:function(){
             MessageBox.alert('未有接口，功能代完善', '提示');
        },
        // 各个验证事件
        checkName:function(){
            let that=this;
            let str=that.name.title;
            let reg = /^[\u4E00-\u9FA5A-Za-z0-9_]{2,10}$/gi;
            if(reg.test(str)){
                that.name.state=true;
                that.msg.show=false;
            }else{
                that.name.state=false;
                that.msg.show=true;
                that.msg.cont="请输入2-10位的字符";
            }
        },
        checkPhone:function(){
            let that=this;
            let str=that.phone.title;
            let reg = /^[1][3][0-9]{9}$/gi;
            if(reg.test(str)){
                that.phone.state=true;
                that.msg.show=false;
            }else{
                that.phone.state=false;
                that.msg.show=true;
                that.msg.cont="请输入正确的手机号";
            }
        },
        checkEmail:function(){
            let that=this;
            let str=that.email.title;
            let reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gi;
            if(reg.test(str)){
                that.email.state=true;
                that.msg.show=false;
            }else{
                that.email.state=false;
                that.msg.show=true;
                that.msg.cont="请输入正确的邮箱";
            }
        },
        checkPass:function(){
            let that=this;
            let str=that.pass.title;
            let reg = /^[A-Za-z0-9]{6,12}$/gi;
            if(reg.test(str)){
                that.pass.state=true;
                that.msg.show=false;
            }else{
                that.pass.state=false;
                that.msg.show=true;
                that.msg.cont="请输入6-12位的英文或数字";
            }
        },
        checkPasses:function(){
            let that=this;
            let str=that.passes.title;
            let reg = /^[A-Za-z0-9]{6,12}$/gi;
            if(str==""){
                that.passes.state=false;
                that.msg.show=true;
                that.msg.cont="二次密码不能为空";
            }else{
                let str1=that.pass.title;
                if(str1!=str){
                    that.passes.state=false;
                    that.msg.show=true;
                    that.msg.cont="两次密码不相等";
                }else{
                    that.passes.state=true;
                    that.msg.show=false;
                }
            }
        },
        checkcode:function(){
            let that=this;
            let code=that.code.title;
            let num =that.codeimg.num;
            if(code!=num){
                that.code.state=false;
                that.msg.show=true;
                that.msg.cont="验证码错误";
            }else{
                that.code.state=true;
                that.msg.show=false;
            }
        },
        // 登录事件
        loginfun:function(){
            let that=this;
            if(that.phone.title !="" || that.pass.title  !=""){
                if(that.phone.state && that.pass.state){
                    let data={
                        mobile:that.phone.title,
                        pwd:that.pass.title,
                        deviceId:1,
                        deviceName:2
                    }
                    that.GLOBAL.loginAjaxfun(data,that);
                }else{
                    MessageBox.alert('手机号或密码格式错误!', '提示');
                }
            }else{
                 MessageBox.alert('请输入手机号及密码!', '提示');
            }
        },
        // 注册事件
        registeredfun:function(){
            let that=this;
            if(that.name.title !="" || that.phone.title  !="" || that.email.title  !="" || that.pass.title  !="" || that.passes.title  !="" || that.code.title){
                if(that.name.title && that.phone.state && that.email.state  && that.pass.state  && that.passes.state  && that.code.state){
                    let data={
                        mobile:that.phone.title,
                        pwd:that.pass.title,
                        code:that.code.title,
                        nick:that.name.title,
                    }
                    that.GLOBAL.registeredAjaxfun(data,that);
                }else{
                    MessageBox.alert('信息格式有误!', '提示');
                }
            }else{
                 MessageBox.alert('请检查信息完整性!', '提示');
            }
        },
    },
    created:function(){
        
    }
}
</script>
<style lang="less" scoped>
@import url("../assets/common/css/common");

    .login_wrap{
        background: #fff;
        .login_title{
            text-align: center;
            margin: 0.2rem 0;
            font-size: 0.3rem;
        }
        .msg{
            padding: 10px 10px;
            color: red;
            font-size: 16px;
        }
        .login_btn{
            padding: 0.2rem 0;
            margin: 0rem auto;
            width: 80%;
            button{
                border-radius: 8px;
                margin: 0.1rem 0;
            }
        }
        .alert_box{
            z-index: 101;
        }
    }
</style>
