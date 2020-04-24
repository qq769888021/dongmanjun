<template>
	<div class="container">
		<table></table>
		<div class="navBack"></div>
		<nav>
			<ul class="navbar">
				<li>
					<router-link to="/">商城主页</router-link>
				</li>
				<li>
					<router-link to="">购物车</router-link>
				</li>
				<li>
					<router-link to="">我的订单</router-link>
				</li>
				<li>
					<router-link to="">联系客服</router-link>
				</li>
				<li>
					<router-link to="">站内信</router-link>
				</li>
				<li>
					<router-link to="">视频站</router-link>
				</li>
				<li>
					<router-link to="">关注我们</router-link>
				</li>
				<li class="search_box">
					<input type="text">
					<img class="btn_hover" src="http://127.0.0.1:5518/image/btn/search_hover.png" alt="">
					<img class="btn_search" src="http://127.0.0.1:5518/image/btn/search.png" alt="">
				</li>
				<li>
					<router-link to="login">登录</router-link>
				</li>
				<li>
					<router-link to="reg">注册</router-link>
				</li>
			</ul>
		</nav>
		<div class="header_line"></div>
	</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
		*{
			margin: 0;
			padding: 0;
			box-sizing:border-box;
		}
		.container{
			position:relative;
		}
		.container .navBack{
			background-image:url(http://127.0.0.1:5518/image/header/home-banner01.b22485d.jpg);
			background-position: center top;
			background-repeat: no-repeat;
			height:40px;
			width:100%;
			filter: blur(4px);
		}
		.container nav{
			position: absolute;
			top:0;
			width:100%;
			z-index: 100;
			background:rgba(255,255,255,.4);
			box-shadow:0px 1px 3px 1px rgba(0,0,0,.1);
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-around;
			align-items: center;
		}
		ul.navbar{
			width: 100%;
			margin:0 auto;
			display: flex;
			flex-flow:row nowrap;
			justify-content: center;
			align-items: center;
			height: 40px;
		}
		ul.navbar::after{
			content:"";
			display:block;
			clear:both;
		}
		.navbar li{
			list-style:none;
		}
		.navbar li a{
			color:black;
			display:block;
			height:40px;
			text-decoration:none;
			font:500 13px/40px "microsoft yahei";
			padding:0 10px;
			border-bottom-left-radius:4px;
			border-bottom-right-radius:4px;
			transition: all .3s;
		}
		.navbar li a:hover{
			background:#0aa0d8;
			color:white;
			height:42px;
		}
		.navbar li input,.navbar li img{
			display:block;
		}
		.search_box{
			border:1px solid #ddd;
			border-radius:3px;
			width: 260px;
			height: 30px;
			background:#eee;
			padding:0 5px;
			position:relative;
		}
		li.search_box input{
			height: 25px;
			width: 230px;
			margin-top:2px;
			background:#eee;
			border:0;
			outline:0;
		}
		.search_box img{
			width: 18px;
			position:absolute;
			right:1px;
			top:4px;
			cursor:pointer;
		}
		.search_box img.btn_search:hover{
			display:none;
		}
		.search_box img.btn_hover:hover{
			z-index:100;
		}
		div.container{
			z-index: 50;
			background-image:url(http://127.0.0.1:5518/image/header/home-banner01.b22485d.jpg);
			background-repeat:no-repeat;
			background-position:center;
			height:180px;
		}
		div.header_line{
			margin-top:141px;
		}
</style>