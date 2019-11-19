SET NAMES UTF8;
DROP DATABASE IF EXISTS dmj;
CREATE DATABASE dmj CHARSET=UTF8;
USE dmj;

#网站的基本信息表
CREATE TABLE dmj_site_info(
	sit_name VARCHAR(16),
	logo VARCHAR(64),
	copyright VARCHAR(64)
);
INSERT INTO dmj_site_info VALUES("动漫菌","","©2014-2077 动漫菌 - dmj.com︱dmj.net");

#网站顶部图片
CREATE TABLE dmj_top_info(
	pic VARCHAR(64),
	title VARCHAR(32),
	ttext VARCHAR(64)
);
INSERT INTO dmj_top_info VALUES("","欢迎来到动漫菌","欢迎来到动漫菌,快来签订契约成为魔法师吧~");

#网站的导航条目
CREATE TABLE dmj_navbar_item(
	name VARCHAR(16),
	url VARCHAR(64),
	title VARCHAR(32)
);
INSERT INTO dmj_navbar_item VALUES("主站","/index.html","主站");
INSERT INTO dmj_navbar_item VALUES("番剧索引","/index.html","你想看的我都有");
INSERT INTO dmj_navbar_item VALUES("新番时间表","/index.html","跨越时间线,发现新动漫");
INSERT INTO dmj_navbar_item VALUES("完结番剧","/index.html","连载什么的最讨厌了");
INSERT INTO dmj_navbar_item VALUES("剧场/OVA","/index.html","不同于番剧的超长进度条");
INSERT INTO dmj_navbar_item VALUES("动漫资讯","/index.html","实时动态,时时更新");

#轮播图
CREATE TABLE dmj_carousel_item(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(128),
	url VARCHAR(128),
	title VARCHAR(128),
	bottom_text VARCHAR(128)
);
INSERT INTO dmj_carousel_item VALUES(NULL,"图片路径","跳转链接","冰海战纪","战士们 我会给你们的战斗赋予意义");
INSERT INTO dmj_carousel_item VALUES(NULL,"图片路径","跳转链接","刀剑神域 爱丽丝篇 异界战争","骑士们的战斗");
INSERT INTO dmj_carousel_item VALUES(NULL,"图片路径","跳转链接","命运-冠位指定 绝对魔兽战线 巴比伦尼亚","声东击西作战");
INSERT INTO dmj_carousel_item VALUES(NULL,"图片路径","跳转链接","我的英雄学院 第四季","振作 Let's Go 烈怒赖雄斗");
INSERT INTO dmj_carousel_item VALUES(NULL,"图片路径","跳转链接","高分少女 第二季","曾与你一起游玩的朋友");

#轮播图右侧推荐区域
CREATE TABLE dmj_right_carousel(
	rid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(128),
	url VARCHAR(128),
	title VARCHAR(128),
	bottom_text VARCHAR(128)
);
INSERT INTO dmj_right_carousel VALUES(NULL,"图片路径","跳转链接","提示文字","底部信息");
INSERT INTO dmj_right_carousel VALUES(NULL,"图片路径","跳转链接","提示文字","底部信息");
INSERT INTO dmj_right_carousel VALUES(NULL,"图片路径","跳转链接","提示文字","底部信息");
INSERT INTO dmj_right_carousel VALUES(NULL,"图片路径","跳转链接","提示文字","底部信息");

#用户信息表
CREATE TABLE dmj_user(
	uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	uname VARCHAR(64),
	upwd VARCHAR(64),
	phone VARCHAR(16),
	email VARCHAR(128),
	gender BOOL,
	user_name VARCHAR(64),
	avatar VARCHAR(128)
);
INSERT INTO dmj_user VALUES(NULL,"root","root1234","11122223333","root@qq.com","1","admin","图片路径");
INSERT INTO dmj_user VALUES(NULL,"root2","root1234","22233334444","root2@qq.com","1","admin","图片路径");









