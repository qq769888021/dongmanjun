<template>
	<div class="login">
		<div class="bt_line"></div>
		<div class="login_text">登录</div>
		<div class="login_box">
			<input type="text" id="uname" placeholder="请输入用户名/手机号" v-model="userName">
			<div id="uname_msg">
				<span>用户名不能为空</span>
			</div>
			<input type="password" id="upwd" placeholder="请输入您的密码" v-model="userPwd">
			<div id="upwd_msg">
				<span>密码不能为空</span>
			</div>
			<div class="remember">
				<input type="checkbox" id="remember_me">
				<label for="remember_me">记住我
					<span>不是自己的电脑上不要选中此项</span>
				</label>
				<a href="">忘记密码?</a>
			</div>
			<button @click="login">登录</button>
			<button>注册</button>
		</div>
	</div>
</template>

<script>
export default {
  data(){
		return {
			userName:"",
			userPwd:""
		}
	},
	methods:{
		testThis(n){
			n==testUname&&(userName.length>0)?(testUname=false):(testUname=true);
			(userPwd.length>0)?(testUpwd=false):(testUpwd=true)
		},
		login(){
			
		}
	},
	
}
</script>

<style scoped>
		*{
			margin:0;
			padding:0;
			box-sizing:border-box;
		}
		a{
			text-decoration:none;
			color:#00a1d6;
		}
		.login div.bt_line{
			width:700px;
			height:50px;
			margin:0 auto -29px;
			border-bottom:1px solid #ddd;
		}
		.login div.login_text{
			font-size:38px;
			text-align:center;
			padding:0 15px 0;
			width:110px;
			margin:0 auto;
			background:#fff;
		}
		.login div.login_box{
			width:500px;
			height: 600px;
			margin:0 auto;
			text-align:center;
			padding:40px 50px 0;
		}
		div.login_box input#uname,div.login_box input#upwd{
			width:100%;
			height: 40px;
			padding:0 10px;
			border-radius:4px;
			border:1px solid #ddd;
		}
		div.login_box #uname_msg,div.login_box #upwd_msg{
			height:40px;
			text-align:left;
			font-size:14px;
			color:#f00;
			line-height:40px;
		}
		div.login_box div.remember{
			font-size:12px;
			text-align:left;
			margin-top:20px;
		}
		.remember label span{
			color:gray;
			margin:0px 10px;
		}
		.remember label+a{
			float:right;
		}
		.login_box div+button,.login_box button+button{
			height:38px;
			width:186px;
			margin:13px 5px;
		}
		.login_box div+button{
			background:#0aa7ed;
			border:1px solid #0aa7ed;
			border-radius:4px;
			color:#fff;
		}
		.login_box button+button{
			background:#fff;
			border:1px solid #ddd;
			border-radius:4px;
		}
</style>
