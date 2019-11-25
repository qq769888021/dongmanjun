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

//用户名查重
router.get("/v1/search_uname/:uname",(req,res)=>{
	let $uname=req.params.uname;
	let sql="select uname from dmj_user where uname=?"
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("0");
		}else{
			res.send("1");
		}
	});
});

//用户注册模块
/*
router.post("/v1/user_reg",(req,res)=>{
	let obj=req.body
	let sql="insert into dmj_user set ?";
	pool.query(sql,[obj],(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send("1");
	});
});
 */

module.exports=router;