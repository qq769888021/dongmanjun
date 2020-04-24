<template>
	<div class="login">
		<div class="bt_line"></div>
		<div class="login_text">登录</div>
		<div class="login_box">
			<input type="text" class="uname" placeholder="请输入用户名/手机号" v-model="userName" @blur="unameBlur">
			<div class="uname_msg">
				<span v-show="!unameShow">用户名不能为空</span>
			</div>
			<input type="password" class="upwd" placeholder="请输入您的密码" v-model="userPwd" @blur="upwdBlur">
			<div class="upwd_msg">
				<span v-show="!upwdShow">密码不能为空</span>
			</div>
			<div class="remember">
				<input type="checkbox" id="remember_me">
				<label for="remember_me">记住我
					<span>不是自己的电脑上不要选中此项</span>
				</label>
				<a href="">忘记密码?</a>
			</div>
			<button @click="login">登录</button>
			<button @click="goReg">注册</button>
		</div>
	</div>
</template>

<script>
export default {
  data(){
		return {
			userName:"",
			userPwd:"",
			unameShow:true,
			upwdShow:true
		}
	},
	methods:{
		goReg(){
			this.$router.push("/reg");
		},
		upwdBlur(){
			this.upwdShow=(this.userPwd.length>0)
		},
		unameBlur(){
			this.unameShow=(this.userName.length>0)
		},
		login(){
			var $uname=this.userName;
			var $upwd=this.userPwd;
			if($uname.length>0){
				if($upwd.length>0){
					var url="user/v1/user_login"
					var obj={uname:$uname,upwd:$upwd}
					this.axios.get(url,{params:obj}).then(result=>{
						console.log(obj);

						if(result.data.code==1){
							alert("登录成功");
							this.$router.push("/");
						}else{
							alert("用户名或密码有误,请核对后再登录");
						}
					});
				}else{
					this.upwdShow=false;
				}
			}else{
				this.unameShow=false;
			}
		}
	}
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
		div.login_box input.uname,div.login_box input.upwd{
			width:100%;
			height: 40px;
			padding:0 10px;
			border-radius:4px;
			border:1px solid #ddd;
		}
		div.login_box .uname_msg,div.login_box .upwd_msg{
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
