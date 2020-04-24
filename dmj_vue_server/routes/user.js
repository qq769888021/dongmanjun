const express=require('express');
const pool=require('../pool.js');
let router=express.Router();
console.log('用户路由连接成功');

//用户登录模块
router.get("/v1/user_login",(req,res)=>{
	var $uname=req.query.uname;
	var $upwd=req.query.upwd;
	// console.log(req.query);
	var sql="select uid from dmj_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		// console.log(result);
		if(result.length>0){
			var userId=result[0].id;
			req.session.userId=userId;
			console.log(req.session);
			res.send({code:1,msg:"登陆成功"});
		}else{
			res.send({code:0,msg:"用户名或密码错误"});
		}
	});
});

//用户名查重
router.get("/v1/search_uname",(req,res)=>{
	var $uname=req.query.uname;
	var sql="select uname from dmj_user where uname=?"
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send({code:0,msg:"用户名已被注册"});
		}else{
			res.send({code:1,msg:"用户名可以注册"});
		}
	});
});

//用户注册模块
router.get("/v1/user_reg",(req,res)=>{
	var uname=req.query.uname;
	var upwd=req.query.upwd;
	var phone=req.query.phone;
	var email=req.query.email;
	var user_name=req.query.user_name;
	var gender=req.query.gender;
	var sql=`insert into dmj_user values(NULL,?,?,?,?,?,?,NULL)`;
	pool.query(sql,[uname,upwd,phone,email,gender,user_name],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send({code:1,msg:"注册成功"});
		}else{
			res.send({code:0,msg:"注册失败"});
		}
	});
});

module.exports=router;