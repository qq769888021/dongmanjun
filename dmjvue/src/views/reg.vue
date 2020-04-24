<template>
  <div class="myLogin">
		<div class="bt_line"></div>
		<div class="reg_text">注册</div>
		<div class="reg_box">
			<ul class="reg_item">
				<li v-for="(item,i) of list" :key="i">{{item.dataName+":"}}</li>
				<li>性别:</li>
			</ul>
			<ul class="reg_input">
				<li v-for="(item,i) of list" :key="i" >
					<input class="my_width" :type="item.type" v-model="item.data" @focus="regFocus(i)" @blur="regBlur(i)">
				</li>
				<li>
					<label class="label_man" for="man">
						<input name="sex" type="radio" v-model="gender" value="1">男
					</label>
					<label for="woman">
						<input name="sex" id="check" type="radio" v-model="gender" value="0">女
					</label>
				</li>
			</ul>
			<ul class="reg_msg_box">
				<li v-for="(item,i) of list" :key="i">
					<span :class="item.class">{{item.msg}}</span>
				</li>
			</ul>
		</div>
		<div class="agreeBtn">
			<div class="agree">
				<input type="checkbox">我已同意
				<a href="">《动漫菌视频网用户使用协议》</a>和
				<a href="">《动漫菌隐私政策》</a>
			</div>
			<button @click="userReg">注册</button>
			<div class="goLogin">
				<router-link to="/login">已有账号,直接登录></router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			list:[
				{dataName:"用户名",type:"text",msg:"",data:"",class:{sucClass:false,failClass:false}},
				{dataName:"密码",type:"password",msg:"",data:"",class:{sucClass:false,failClass:false}},
				{dataName:"确认密码",type:"password",msg:"",data:"",class:{sucClass:false,failClass:false}},
				{dataName:"电话",type:"text",msg:"",data:"",class:{sucClass:false,failClass:false}},
				{dataName:"邮箱",type:"text",msg:"",data:"",class:{sucClass:false,failClass:false}},
				{dataName:"姓名",type:"text",msg:"",data:"",class:{sucClass:false,failClass:false}},
			],
			gender:"1"
		}
	},
	methods:{
		userReg(){
			var uname=this.list[0].data;
			var upwd=this.list[2].data;
			var phone=this.list[3].data;
			var email=this.list[4].data;
			var user_name=this.list[5].data;
			var gender=this.gender;
			var bool=this.list.every(function(item){
				return item.class.sucClass==true;
			});
			if(bool){
				var url="user/v1/user_reg";
				var obj={uname,upwd,phone,email,user_name,gender};
				this.axios.get(url,{params:obj}).then(result=>{
					if(result.data.code==1){
						alert("注册成功,请登录");
						this.$router.push("login");
					}else{
						alert("注册失败,请稍后重试");
					}
				});
			}
		},
		regFocus(i){
			(i==0)&&(this.list[i].msg="请输入6~12位用户名,字母或字母+数字组合");
			(i==1)&&(this.list[i].msg="请输入6~12位密码,字母或字母+数字组合");
			(i==2)&&(this.list[i].msg="请输入6~12位密码,字母或字母+数字组合");
			(i==3)&&(this.list[i].msg="请输入真实的手机号码");
			(i==4)&&(this.list[i].msg="请输入真实的邮箱地址");
			(i==5)&&(this.list[i].msg="请输入您的姓名");
		},
		regBlur(i){
			var data=this.list[i].data;
			if(i==0)var reg=/^[0-9a-zA-Z]{6,12}$/;
			if(i==1)var reg=/^[0-9a-zA-Z]{6,12}$/;
			if(i==2){
				if(this.list[1].data===data){
					var reg=/^[0-9a-zA-Z]{6,12}$/;
				}else{
					this.list[i].msg="×两次输入的密码不一致";
					this.list[i].class.sucClass=false;
					this.list[i].class.failClass=true;
					return;
				}
			}
			if(i==3)var reg=/^1[3-9]\d{9}$/;
			if(i==4)var reg=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
			if(i==5)var reg=/^([\u4e00-\u9fa5]{2,20}|[a-zA-Z.\s]{2,20})$/;
			if(reg.test(data)){
				this.list[i].msg="√正确";
				this.list[i].class.sucClass=true;
				this.list[i].class.failClass=false;
			}else{
				this.list[i].msg="×格式错误";
				this.list[i].class.sucClass=false;
				this.list[i].class.failClass=true;
				return;
			}
		}
	}
}
</script>

<style scoped>
.myLogin iframe.header{
	width: 100%;
	height: 180px;
}
div.bt_line{
	width: 800px;
	height: 50px;
	border-bottom:1px solid #ddd;
	margin:0 auto -29px;
}
div.reg_text{
	margin:0 auto;
	font-size:38px;
	padding:0 15px;
	background:#fff;
	width: 106px;
}
div.reg_box{
	width: 1000px;
	height: 435px;
	margin:0 auto;
	display:flex;
	flex-flow:row nowrap;
}
.reg_box ul{
	list-style:none;
	margin-top:40px;
}
.reg_box ul li{
	height:50px;
	margin:5px 0;
	line-height:50px;
}
.reg_box .reg_item{
	width:33.33%;
	text-align:right;
}
.reg_box .reg_input{
	width:33.33%;
	text-align:center;
}
.reg_box .reg_input input.my_width{
	height: 38px;
	width: 91%;
	margin:0 15px;
	border-radius:4px;
	border:1px solid #ddd;
	padding:0 10px;
}input#check{
	margin-left:15px;
}
ul.reg_msg_box{
	font-size:12px;
	color:#00a0d8;
	width:33.33%
}
.myLogin .agreeBtn{
	display:flex;
	flex-flow:column nowrap;
	width:471px;
	align-items: center;
	margin:0 auto;
}
.myLogin .agree{
	font-size:12px;
	margin-left:54px;
}
.myLogin a{
	text-decoration:none;
	color:#00a1d6;
	font-size:12px;
}
.myLogin button{
	width:303px;
	height:38px;
	background:#00a0d8;
	border:1px solid #00a0d8;
	border-radius:3px;
	color:#fff;
	margin:10px 0;
}
.myLogin .goLogin{
	display:flex;
	justify-content: flex-end;
	width:303px;
}
.myLogin .failClass{
	color:#f00;
	border:1px solid #f00;
}
.myLogin .sucClass{
	border:1px solid darkgreen;
	color:darkgreen;
}
</style>