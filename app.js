const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');

let app=express();
app.listen(5518);
console.log('web服务器启动成功!');

//托管静态资源
app.use(express.static('./public'));

//应用bodyparser中间件
app.use(bodyParser.urlencoded({
	extended:false
}));

//使用路由器模块
app.use('/user',userRouter);

