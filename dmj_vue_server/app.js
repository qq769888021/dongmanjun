const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');
const cors=require('cors');
const session=require('express-session');

let app=express();
app.listen(5518);
console.log('web服务器启动成功!');

//配置跨域模块
app.use(cors({
	origin:["http://127.0.0.1:8080","http://localhost:8080"],
	credentials:true
}));
//配置session模块
app.use(session({
	secret:"128位安全字符串",//加密条件
	resave:true,//请求更新数据
	saveUninitialized:true//保存初始数据
}));
//托管静态资源
app.use(express.static('./public'));

//应用bodyparser中间件
app.use(bodyParser.urlencoded({
	extended:false
}));

//使用路由器模块
app.use('/user',userRouter);

