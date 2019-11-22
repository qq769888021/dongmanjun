const express=require('express');
const pool=require('../pool.js');
let router=express.Router();
console.log('用户路由连接成功');

//用户登录模块
router.get("/v1/user_login/:uname&:upwd",(req,res)=>{
	let $uname=req.params.uname;
	let $upwd=req.params.upwd;
	let sql="select * from dmj_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});

//用户注册模块
/*
router.post("/v1/user_reg/uname&upwd",(req,res)=>{
	let $uname=req.body.uname;
	let $upwd=req.body.upwd;
	let $phone=req.body.phone;
	let $email=req.body.email;
	let $gender=req.body.gender;
	let $user_name=req.body.user_name;
	let sql="insert into dmj_user set uid=null uname=?,wpwd=?,phone=?,email=?,gender=?,user_name=?";
	pool.query(sql,[$uname,$upwd,$phone,$email,$gender,$user_name],(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send("1");
	});
});
 */

module.exports=router;