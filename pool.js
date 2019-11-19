const mysql=require('mysql');
//创建连接池
let pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'dmj',
	connectionLimit:15
});
console.log('连接池创建成功');
//导出连接池
module.exports=pool;