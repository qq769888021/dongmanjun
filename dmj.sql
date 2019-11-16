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
