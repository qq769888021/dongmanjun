<template>
<div class="index">
  <div class="allPage">
    <!-- 顶部导航栏 -->
    <nav>
      <ul class="navBar">
        <li class="navTitle" v-for="(item,i) of nav" :key="i">
          <div>
            <router-link to="">
              <span :class="item.icon"></span>
              <p>{{item.title}}</p>
            </router-link>
          </div>
          <ul>
            <li v-for="(a,b) of item.subtitle" :key="b">
              <router-link :to="a.url">{{a.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- 轮播图楼层 -->
    <div>
      <div class="block" autoplay="false">
          <el-carousel height="350px">
            <el-carousel-item v-for="(item,i) of carousel" :key="i">
              <router-link :to="item.url">
                <img :src="item.src">
              </router-link>
            </el-carousel-item>
          </el-carousel>
      </div>
      <one-product v-for="(item,i) of afterCarousel" :key="i" :title="item.title" :price="item.price" :src="item.src" :url="item.url"></one-product>
    </div>
    <!-- 轮播图下最新情报 -->
    <div class="news">
      <ul>
        <li v-for="(item,i) of news" :key="i">
          <router-link :to="item.url">{{item.text}}</router-link>
        </li>
      </ul>
      <p>
        <router-link to="/login">查看更多</router-link>
      </p>
    </div>
    <!-- 楼层组件 -->
    <i-floor v-for="(item,index) of floor" :key="index" :floorTitle="item.floorTitle" :iconClass="item.iconClass" :url="item.url" :floor="index+1">
      <one-product v-for="(a,b) of item.product" :key="b" :url="a.url" :title="a.title" :src="myS.baseURL+a.src" :price="a.price"></one-product>
    </i-floor>
  </div>
</div>
</template>

<script>
import oneProduct from "./../components/oneProduct.vue";
import iFloor from "./../components/iFloor";
import myS from '../services/myService';
export default {
  data(){
    return {
      myS,
      floor:[
        {//一楼
          iconClass:"iconfont icon-f",
          floorTitle:"Fate15周年纪念/Fate专栏",
          url:"/login",
          product:[
            {
              pid:1,
              title:"【包邮】Fate/Apocrypha 贞德&阿斯托尔福 TYPE-MOON Racing Ver.",
              src:"image/floorPic/f1/u1wcwg45a1rlstdhhul1c3wdm2qa59f6.jpg",
              url:"/login",
              price:1713
            },
            {
              pid:2,
              title:"Fate/Grand Order Duel-collection figure-第10弾",
              src:"image/floorPic/f1/0seyouno8ksqsnzyvt1sa4u11iwsec83.jpg",
              url:"/login",
              price:568
            },
            {
              pid:3,
              title:"Fate/stay night Saber~十周年皇家礼服ver.~1/7手办",
              src:"image/floorPic/f1/ay74oeeb2nwhfetgxvt6w51g1qj6sizz.jpg",
              url:"/login",
              price:1312
            },
            {
              pid:4,
              title:"【包邮】Fate/Grand Order Ruler/贞德 第三再临",
              src:"image/floorPic/f1/7a5oeto45dy3o7nahdqo5syqh8depnjo.jpg",
              url:"/login",
              price:1674
            },
          ]
        },
        {//二楼
          iconClass:"iconfont icon-f",
          floorTitle:"附官方特典的商品",
          url:"/login",
          product:[
            {
              pid:5,
              title:"【包邮】G.E.M.系列 鬼灭之刃 掌上善逸君（附特典）",
              src:"image/floorPic/f2/1edmfpfn6tcd1ix8rnfqbgm0j9rubqdd.jpg",
              url:"/login",
              price:349
            },
            {
              pid:6,
              title:"【包邮】明日方舟 艾雅法拉 干员精英二ver.（附特典）",
              src:"image/floorPic/f2/q4axgnzbxycdl39pz0kdbpxcqxe6ch40.jpg",
              url:"/login",
              price:889
            },
            {
              pid:7,
              title:"【包邮】骨装机兵 SA-16Ex 短剑〈装备扩张试验型〉（附特典）",
              src:"image/floorPic/f2/mavol95sqm0gahupidyhr8id3fbcg8w7.jpg",
              url:"/login",
              price:214
            },
            {
              pid:8,
              title:"【包邮】机甲少女 莱蒂齐娅 龙装（附特典）",
              src:"image/floorPic/f2/1582122791424 (12).jpg",
              url:"/login",
              price:303
            },
          ]
        },
        {//三楼
          iconClass:"iconfont icon-f",
          floorTitle:"GoodSmile",
          url:"/login",
          product:[
            {
              pid:9,
              title:"雷姆 生日祭Ver.",
              src:"image/floorPic/f3/bcysh3qemggnlmu1ymjc96184bicsalm.jpg",
              url:"/login",
              price:1100
            },
            {
              pid:10,
              title:"粘土人 辛巴",
              src:"image/floorPic/f3/u28it7y9m0cwaymuvqlcxmzgcbcmekdt.jpg",
              url:"/login",
              price:378
            },
            {
              pid:11,
              title:"粘土人 安娜",
              src:"image/floorPic/f3/2slw2fq1ts60c06trrvmbpgdefad7zj5.jpg",
              url:"/login",
              price:296
            },
            {
              pid:12,
              title:"粘土人 艾莎（三次再贩）",
              src:"image/floorPic/f3/23r0b2zyd19b65njd8m9atwqtd6s6ahk.jpg",
              url:"/login",
              price:296
            },
            {
              pid:13,
              title:"粘土人 鹰眼 终局之战Ver. DX",
              src:"image/floorPic/f3/avub7hzzzffhkd6uwebttahfeuzcyvvz.jpg",
              url:"/login",
              price:472
            },
            {
              pid:14,
              title:"粘土人 利库（再贩）",
              src:"image/floorPic/f3/04qb58ja4dwi7mmo2nnp12hl6pplvp2o.jpg",
              url:"/login",
              price:301
            },
            {
              pid:15,
              title:"粘土人 索拉(再贩）",
              src:"image/floorPic/f3/zzvt0mjt962nn3aacvcl57w83z6fbyao.jpg",
              url:"/login",
              price:301
            },
            {
              pid:16,
              title:"和泉纱雾/Smile with my eyes(注视着我的笑容）～与妹妹之间的隔阂 Frontispiece ver.～",
              src:"image/floorPic/f3/nd9fc9hoh204an4saqwnptc1kjas34ed.jpg",
              url:"/login",
              price:303
            },
            {
              pid:17,
              title:"粘土人 漩涡鸣人 六道仙人模式Ver.",
              src:"image/floorPic/f3/udzv1gvdh6tqv35nkryx1tpnogkkfbz9.jpg",
              url:"/login",
              price:1536
            },
          ]
        },
        {//四楼
          iconClass:"iconfont icon-f",
          floorTitle:"GoodSmile",
          url:"/login",
          product:[
            {
              pid:18,
              title:"【包邮】G.E.M.系列 鬼灭之刃 掌上善逸君（附特典）",
              src:"image/floorPic/f4/1582122791425 (25).jpg",
              url:"/login",
              price:349
            },
            {
              pid:19,
              title:"【包邮】Desktop Singer 初音未来系列",
              src:"image/floorPic/f4/1582122791425 (6).jpg",
              url:"/login",
              price:357
            },
            {
              pid:20,
              title:"【包邮】Desktop Army 机战少女 Alice 西尔菲（加奈夏装备）",
              src:"image/floorPic/f4/1582122791425 (9).jpg",
              url:"/login",
              price:359
            },
            {
              pid:21,
              title:"【包邮】Lucrea 女神异闻录５ THE ROYAL 芳泽霞",
              src:"image/floorPic/f4/1582122791425 (4).jpg",
              url:"/login",
              price:937
            },
            {
              pid:22,
              title:"【包邮】Variable Action Heros 海贼王 蒙奇・D・路飞（再贩）",
              src:"image/floorPic/f4/1582122791425 (8).jpg",
              url:"/login",
              price:498
            },
            {
              pid:23,
              title:"【包邮】AlphaOmega 偶像活动STARS! 白银莉莉 Rosetta Rosetta Thorn Coord",
              src:"image/floorPic/f4/1582122791425 (1).jpg",
              url:"/login",
              price:1647
            },
            {
              pid:24,
              title:"【包邮】盗墓笔记—重启（三）",
              src:"image/floorPic/f4/1582122791421.jpg",
              url:"/login",
              price:318
            },
            {
              pid:25,
              title:"【包邮】AlphaOmega Re:从零开始的异世界生活 蕾姆 猫耳Ver.",
              src:"image/floorPic/f4/1582122791424 (31).jpg",
              url:"/login",
              price:1088
            },
            {
              pid:26,
              title:"【包邮】火影忍者GALS 火影忍者-疾风传- 纲手Ver.2",
              src:"image/floorPic/f4/1582122791424 (30).jpg",
              url:"/login",
              price:872
            },
            {
              pid:27,
              title:"【包邮】蚊香眼系列 火影忍者-疾风传-漩涡鸣人＆宇智波佐助 忍界大战套装（再贩）",
              src:"image/floorPic/f4/1582122791425 (5).jpg",
              url:"/login",
              price:278
            },
            {
              pid:28,
              title:"【包邮】Precious G.E.M.系列 CodeGeass 复活的鲁路修 L.L.＆C.C.套装",
              src:"image/floorPic/f4/1582122791424 (28).jpg",
              url:"/login",
              price:2100
            },
            {
              pid:29,
              title:"【包邮】Portrait.Of.Pirates 海贼王“Warriors Alliance” 路飞太郎",
              src:"image/floorPic/f4/1582122791424 (25).jpg",
              url:"/login",
              price:755
            },
            {
              pid:30,
              title:"【包邮】G.E.M.系列 鬼灭之刃 掌上祢豆子（再贩）",
              src:"image/floorPic/f4/1582122791425 (2).jpg",
              url:"/login",
              price:349
            },
            {
              pid:31,
              title:"【包邮】G.E.M.系列 精灵宝可梦 玛奥＆甜舞妮（附特典）",
              src:"image/floorPic/f4/1582122791425 (3).jpg",
              url:"/login",
              price:505
            },
            {
              pid:32,
              title:"【包邮】GGG 机动武斗传G高达 深村玲（附特典）",
              src:"image/floorPic/f4/1582122791424 (24).jpg",
              url:"/login",
              price:755
            },
          ]
        },
        {//五楼
          iconClass:"iconfont icon-f",
          floorTitle:"寿屋手办推荐",
          url:"/login",
          product:[
            {
              pid:33,
              title:"【包邮】ARTFX J 樱花大战 真宫寺樱",
              src:"image/floorPic/f5/1582122791424 (29).jpg",
              url:"/login",
              price:795
            },
            {
              pid:34,
              title:"【包邮】ARTFX PREMIER 漫威宇宙 绯红女巫",
              src:"image/floorPic/f5/1582122791425.jpg",
              url:"/login",
              price:856
            },
            {
              pid:35,
              title:"【包邮】ARTFX 星球大战:新希望 风暴兵",
              src:"image/floorPic/f5/1582122791424 (27).jpg",
              url:"/login",
              price:693
            },
            {
              pid:36,
              title:"【包邮】DC漫画美少女 哈利·奎恩 NEW52Ver.第二版",
              src:"image/floorPic/f5/1582122791424 (23).jpg",
              url:"/login",
              price:520
            },
            {
              pid:37,
              title:"【包邮】DC漫画美少女 黑色金丝雀 第二版",
              src:"image/floorPic/f5/1582122791424 (26).jpg",
              url:"/login",
              price:455
            },
            {
              pid:38,
              title:"【包邮】DC漫画美少女 女猎人 第二版",
              src:"image/floorPic/f5/1582122791424 (22).jpg",
              url:"/login",
              price:455
            },
            {
              pid:39,
              title:"【包邮】小马宝莉美少女 云宝黛西",
              src:"image/floorPic/f5/1582122791424 (18).jpg",
              url:"/login",
              price:652
            },
          ]
        },
        {//六楼
          iconClass:"iconfont icon-f",
          floorTitle:"寿屋KOTOBUKIYA",
          url:"/login",
          product:[
            {
              pid:40,
              title:"【包邮】洛克人X 杰洛 恶梦Ver.",
              src:"image/floorPic/f6/1582122791424 (21).jpg",
              url:"/login",
              price:318
            },
            {
              pid:41,
              title:"【包邮】洛克人X 杰洛",
              src:"image/floorPic/f6/1582122791424 (19).jpg",
              url:"/login",
              price:300
            },
            {
              pid:42,
              title:"【包邮】装甲娘 卡塔库拉索菲亚 皇帝装",
              src:"image/floorPic/f6/1582122791424 (16).jpg",
              url:"/login",
              price:363
            },
            {
              pid:43,
              title:"【包邮】骨装机兵 SA-16Ex 短剑〈装备扩张试验型〉（附特典）",
              src:"image/floorPic/f6/1582122791425 (30).jpg",
              url:"/login",
              price:214
            },
            {
              pid:44,
              title:"【包邮】六角机牙 仿真机械人 丑角",
              src:"image/floorPic/f6/1582122791424 (20).jpg",
              url:"/login",
              price:97
            },
            {
              pid:45,
              title:"【包邮】斑鸠 飞铁块 黑色涂装（再贩）",
              src:"image/floorPic/f6/1582122791424 (14).jpg",
              url:"/login",
              price:227
            },
            {
              pid:46,
              title:"【包邮】机甲少女 短剑 XF-3型 低可见度版（附特典）",
              src:"image/floorPic/f6/1582122791424 (17).jpg",
              url:"/login",
              price:279
            },
            {
              pid:47,
              title:"【包邮】女神装置 一条绫香（附特典）",
              src:"image/floorPic/f6/1582122791425 (20).jpg",
              url:"/login",
              price:350
            },
            {
              pid:48,
              title:"【包邮】女神装置系列 机战少女Alice 相河爱花（附特典）",
              src:"image/floorPic/f6/1582122791424 (15).jpg",
              url:"/login",
              price:363
            },
            {
              pid:49,
              title:"【包邮】梦幻之星Online2es 珍妮（附特典）",
              src:"image/floorPic/f6/aavr8aqb3ixylbwanl8zhpggtys7h3cr.jpg",
              url:"/login",
              price:806
            },
          ]
        },
        {//七楼
          iconClass:"iconfont icon-f",
          floorTitle:"ANIPLEX",
          url:"/login",
          product:[
            {
              pid:50,
              title:"Fate/stay night Saber~十周年皇家礼服ver.~1/7手办",
              src:"image/floorPic/f7/1582122791426 (7).jpg",
              url:"/login",
              price:1312
            },
            {
              pid:51,
              title:"BUZZmod.　鬼灭之刃　灶门炭治郎",
              src:"image/floorPic/f7/1582122791423 (4).jpg",
              url:"/login",
              price:680
            },
            {
              pid:52,
              title:"命运之夜-天之杯：迷失之蝶",
              src:"image/floorPic/f7/1582122791425 (32).jpg",
              url:"/login",
              price:1600
            },
            {
              pid:53,
              title:"WAHOO! 亚丝娜 水精灵 京友禅ver.",
              src:"image/floorPic/f7/1582122791424 (13).jpg",
              url:"/login",
              price:1300
            },
            {
              pid:54,
              title:"樱岛麻衣 和服ver. 1/7手办",
              src:"image/floorPic/f7/1582122791422 (10).jpg",
              url:"/login",
              price:1200
            },
            {
              pid:55,
              title:"路人女主的养成方法♭ 霞之丘诗羽 ～内衣ver.～ 1/7标准比例手办",
              src:"image/floorPic/f7/1582122791424 (10).jpg",
              url:"/login",
              price:1290
            },
            {
              pid:56,
              title:"Fate/stay night 15周年纪念手办 -轨迹-",
              src:"image/floorPic/f7/1582122791424 (9).jpg",
              url:"/login",
              price:4100
            },
          ]
        },
        {//八楼
          iconClass:"iconfont icon-f",
          floorTitle:"Union-Creative",
          url:"/login",
          product:[
            {
              pid:57,
              title:"【包邮】Overlord 雅儿贝德 私服Ver.",
              src:"image/floorPic/f8/1582122791424 (11).jpg",
              url:"/login",
              price:900
            },
            {
              pid:58,
              title:"【包邮】Hiten 原画 E.R.I.N.A.",
              src:"image/floorPic/f8/1582122791424 (5).jpg",
              url:"/login",
              price:685
            },
            {
              pid:59,
              title:"【包邮】米白粕原创角色 blue ",
              src:"image/floorPic/f8/1582122791424 (8).jpg",
              url:"/login",
              price:685
            },
            {
              pid:60,
              title:"【包邮】灰色的乐园 松岛满",
              src:"image/floorPic/f8/1582122791424 (7).jpg",
              url:"/login",
              price:590
            },
            {
              pid:61,
              title:"【包邮】刀剑神域 莉法&桐谷直叶 2个套装",
              src:"image/floorPic/f8/1582122791424 (3).jpg",
              url:"/login",
              price:1155
            },
            {
              pid:62,
              title:"【包邮】森仓圆插画 Hello Summer",
              src:"image/floorPic/f8/1582122791424 (4).jpg",
              url:"/login",
              price:720
            },
            {
              pid:63,
              title:"【包邮】进击的巨人 利威尔 Coat Style",
              src:"image/floorPic/f8/1582122791424 (6).jpg",
              url:"/login",
              price:626
            },
          ]
        },
        {//九楼
          iconClass:"iconfont icon-f",
          floorTitle:"新品推荐",
          url:"/login",
          product:[
            {
              pid:64,
              title:"【包邮】初音未来 MIKU EXPO 2019 台湾＆香港Ver.",
              src:"image/floorPic/f9/1582122791423 (1).jpg",
              url:"/login",
              price:1321
            },
            {
              pid:65,
              title:"【包邮】铁机巧 02 璇玑湖（再版）",
              src:"image/floorPic/f9/1582122791423 (25).jpg",
              url:"/login",
              price:2335
            },
            {
              pid:66,
              title:"【包邮】我的青春恋爱物语果然有问题。完 一色彩羽 -白无垢-",
              src:"image/floorPic/f9/1582122791423 (24).jpg",
              url:"/login",
              price:1011
            },
            {
              pid:67,
              title:"【包邮】出包王女Darkness 梦梦·贝莉雅·戴比路克 睡衣Ver.",
              src:"image/floorPic/f9/1582122791423 (23).jpg",
              url:"/login",
              price:855
            },
            {
              pid:68,
              title:"【包邮】缘之空 春日野穹 Ending Ver.",
              src:"image/floorPic/f9/1582122791423 (22).jpg",
              url:"/login",
              price:1308
            },
          ]
        },
        {//十楼
          iconClass:"iconfont icon-f",
          floorTitle:"国产作品",
          url:"/login",
          product:[
            {
              pid:69,
              title:"毛绒玩偶 白起",
              src:"image/floorPic/f10/1582122791423 (15).jpg",
              url:"/login",
              price:260
            },
            {
              pid:70,
              title:"毛绒玩偶 周棋洛",
              src:"image/floorPic/f10/1582122791423 (14).jpg",
              url:"/login",
              price:260
            },
            {
              pid:71,
              title:"【包邮】明日方舟 艾雅法拉 干员精英二ver.（附特典）",
              src:"image/floorPic/f10/1582122791425 (23).jpg",
              url:"/login",
              price:889
            },
            {
              pid:72,
              title:"M1加兰德 泳衣Ver.（沙滩公主）",
              src:"image/floorPic/f10/1582122791423 (16).jpg",
              url:"/login",
              price:431
            },
            {
              pid:73,
              title:"【包邮】「明日方舟」 天火 精英二",
              src:"image/floorPic/f10/1582122791423 (10).jpg",
              url:"/login",
              price:889
            },
          ]
        },
        {//十一楼
          iconClass:"iconfont icon-f",
          floorTitle:"美系作品",
          url:"/login",
          product:[
            {
              pid:74,
              title:"【包邮】DC漫画美少女 哈利·奎恩 NEW52Ver.第二版",
              src:"image/floorPic/f11/1582122791424 (23).jpg",
              url:"/login",
              price:520
            },
            {
              pid:75,
              title:"【包邮】DC漫画美少女 黑色金丝雀 第二版",
              src:"image/floorPic/f11/1582122791424 (26).jpg",
              url:"/login",
              price:455
            },
            {
              pid:76,
              title:"【包邮】DC漫画美少女 女猎人 第二版",
              src:"image/floorPic/f11/1582122791424 (22).jpg",
              url:"/login",
              price:455
            },
            {
              pid:77,
              title:"【包邮】ARTFX 星球大战:新希望 风暴兵",
              src:"image/floorPic/f11/1582122791424 (27).jpg",
              url:"/login",
              price:693
            },
            {
              pid:78,
              title:"【包邮】MAFEX 复仇者联盟：无限战争 美国队长 振金盾牌Ver.",
              src:"image/floorPic/f11/1582122791422.jpg",
              url:"/login",
              price:479
            },
            {
              pid:79,
              title:"【包邮】MAFEX 复仇者联盟：终局之战 钢铁蜘蛛侠 带钢铁侠无限手套",
              src:"image/floorPic/f11/1582122791423 (13).jpg",
              url:"/login",
              price:479
            },
            {
              pid:80,
              title:"【包邮】MAFEX 神奇动物在哪里2 格林沃德",
              src:"image/floorPic/f11/1582122791423 (12).jpg",
              url:"/login",
              price:480
            },
            {
              pid:81,
              title:"【包邮】漫威美术馆系列 英雄归来 蜘蛛侠",
              src:"image/floorPic/f11/1582122791423 (11).jpg",
              url:"/login",
              price:400
            },
            {
              pid:82,
              title:"【包邮】MAFEX 漫画版 蝙蝠侠-黑暗骑士归来",
              src:"image/floorPic/f11/1582122791423 (9).jpg",
              url:"/login",
              price:430
            },
            {
              pid:83,
              title:"【包邮】MAFEX 漫画版 “缄默”蝙蝠侠",
              src:"image/floorPic/f11/1582122791423 (8).jpg",
              url:"/login",
              price:430
            },
          ]
        },
        {//十二楼
          iconClass:"iconfont icon-f",
          floorTitle:"GSC现货",
          url:"/login",
          product:[
            {
              pid:84,
              title:"粘土人 莫雨",
              src:"image/floorPic/f12/1582122791423 (7).jpg",
              url:"/login",
              price:348
            },
            {
              pid:85,
              title:"粘土人 穆玄英",
              src:"image/floorPic/f12/1582122791423 (6).jpg",
              url:"/login",
              price:348
            },
            {
              pid:86,
              title:"粘土人 艾玛",
              src:"image/floorPic/f12/1582122791423 (5).jpg",
              url:"/login",
              price:287
            },
            {
              pid:87,
              title:"伊莉雅丝菲尔·冯·爱因兹贝伦 Prisma☆Klangfest Ver.",
              src:"image/floorPic/f12/1582122791423 (3).jpg",
              url:"/login",
              price:1098
            },
            {
              pid:88,
              title:"泽村·斯潘塞·英梨梨（再贩）",
              src:"image/floorPic/f12/1582122791423 (2).jpg",
              url:"/login",
              price:694
            },
            {
              pid:89,
              title:"粘土人 休比",
              src:"image/floorPic/f12/1582122791423.jpg",
              url:"/login",
              price:299
            },
            {
              pid:90,
              title:"粘土人 夜刀神十香（二次再贩）",
              src:"image/floorPic/f12/1582122791422 (25).jpg",
              url:"/login",
              price:287
            },
            {
              pid:91,
              title:"粘土人 四糸乃（二次再贩）",
              src:"image/floorPic/f12/1582122791422 (24).jpg",
              url:"/login",
              price:287
            },
            {
              pid:92,
              title:"粘土人 时崎狂三（二次再贩）",
              src:"image/floorPic/f12/1582122791422 (22).jpg",
              url:"/login",
              price:287
            },
            {
              pid:93,
              title:"一期一振",
              src:"image/floorPic/f12/1582122791422 (23).jpg",
              url:"/login",
              price:824
            },
            {
              pid:94,
              title:"粘土人 Saber EXTRA（再贩）",
              src:"image/floorPic/f12/1582122791422 (19).jpg",
              url:"/login",
              price:251
            },
            {
              pid:95,
              title:"“红”之Saber -莫德雷德-",
              src:"image/floorPic/f12/1582122791422 (21).jpg",
              url:"/login",
              price:839
            },
            {
              pid:96,
              title:"艾莉莎・伊莉妮琪娜・奥美拉 深红的礼服Ver.",
              src:"image/floorPic/f12/1582122791422 (20).jpg",
              url:"/login",
              price:1436
            },
            {
              pid:97,
              title:"粘土人 Doll Avenger/贞德〔Alter〕新宿 Ver. ",
              src:"image/floorPic/f12/1582122791422 (17).jpg",
              url:"/login",
              price:358
            },
            {
              pid:98,
              title:"牧濑红莉栖 兔女郎 Ver.",
              src:"image/floorPic/f12/1582122791422 (15).jpg",
              url:"/login",
              price:1422
            },
          ]
        },
        {//十三楼
          iconClass:"iconfont icon-f",
          floorTitle:"现货贩售",
          url:"/login",
          product:[
            {
              pid:99,
              title:"【包邮】G.E.M.系列 鬼灭之刃 掌上手办 小祢豆子",
              src:"image/floorPic/f13/1582122791422 (18).jpg",
              url:"/login",
              price:390
            },
            {
              pid:100,
              title:"【包邮】Fate/Grand Order 奥兹曼迪亚斯",
              src:"image/floorPic/f13/1582122791422 (14).jpg",
              url:"/login",
              price:1328
            },
            {
              pid:101,
              title:"【包邮】G.E.M.系列 BLEACH 黑崎一护 G.E.M.10周年Ver.",
              src:"image/floorPic/f13/1582122791422 (16).jpg",
              url:"/login",
              price:670
            },
            {
              pid:102,
              title:"【包邮】少女前线 1/8 HK416 星之茧 Ver.",
              src:"image/floorPic/f13/1582122791422 (11).jpg",
              url:"/login",
              price:798
            },
            {
              pid:103,
              title:"【包邮】王权富贵",
              src:"image/floorPic/f13/1582122791422 (13).jpg",
              url:"/login",
              price:580
            },
            {
              pid:104,
              title:"【包邮】MINICRAFT系列 Q版可动手办 少女前线 AR小队 Ver.",
              src:"image/floorPic/f13/1582122791421 (5).jpg",
              url:"/login",
              price:898
            },
            {
              pid:105,
              title:"【包邮】GGG 机动战士Z高达 哈曼·卡恩",
              src:"image/floorPic/f13/1582122791422 (8).jpg",
              url:"/login",
              price:732
            },
            {
              pid:106,
              title:"【包邮】MAFEX 蜘蛛侠 终极蜘蛛侠 迈尔斯.莫拉莱斯",
              src:"image/floorPic/f13/1582122791422 (12).jpg",
              url:"/login",
              price:527
            },
            {
              pid:107,
              title:"【包邮】初音未来 生日手办 2019Ver.",
              src:"image/floorPic/f13/1582122791421 (3).jpg",
              url:"/login",
              price:109
            },
            {
              pid:108,
              title:"【包邮】景品 初音未来 原创私服Ver.",
              src:"image/floorPic/f13/1582122791422 (9).jpg",
              url:"/login",
              price:105
            },
            {
              pid:109,
              title:"【包邮】景品 初音未来 原创秋服ver.",
              src:"image/floorPic/f13/1582122791421 (2).jpg",
              url:"/login",
              price:105
            },
            {
              pid:110,
              title:"【包邮】景品 Re:从零开始的异世界生活 雷姆 ~针织连衣裙Ver.~",
              src:"image/floorPic/f13/1582122791422 (7).jpg",
              url:"/login",
              price:105
            },
            {
              pid:111,
              title:"【包邮】刀剑神域 Alicization 亚丝娜 私服",
              src:"image/floorPic/f13/1582122791422 (4).jpg",
              url:"/login",
              price:109
            },
            {
              pid:112,
              title:"【包邮】DESK TOP ASTOREA Saber/阿尔托莉雅·潘德拉贡",
              src:"image/floorPic/f13/1582122791422 (6).jpg",
              url:"/login",
              price:311
            },
            {
              pid:113,
              title:"【包邮】DESK TOP ARMY Fate/Grand Order 第3弹  ",
              src:"image/floorPic/f13/1582122791422 (5).jpg",
              url:"/login",
              price:127
            },
            {
              pid:114,
              title:"【包邮】洛天依水手服系列盒蛋 盲盒单抽",
              src:"image/floorPic/f13/1582122791421 (4).jpg",
              url:"/login",
              price:59
            },
            {
              pid:115,
              title:"【包邮】寿GALS 荒野的寿飞行队 琪莉耶",
              src:"image/floorPic/f13/1582122791421 (7).jpg",
              url:"/login",
              price:910
            },
            {
              pid:116,
              title:"【包邮】Q版 美少女战士 幸福的婚礼 白无垢Ver.",
              src:"image/floorPic/f13/1582122791421 (6).jpg",
              url:"/login",
              price:216
            },
            {
              pid:117,
              title:"【包邮】Portrait.Of.Pirates 海贼王 文斯莫克·蕾玖 Ver.BB",
              src:"image/floorPic/f13/1582122791421 (9).jpg",
              url:"/login",
              price:596
            },
            {
              pid:118,
              title:"【包邮】津岛善子 夏日女王",
              src:"image/floorPic/f13/1582122791421 (8).jpg",
              url:"/login",
              price:630
            },
          ]
        },
      ],
      news:[
        {text:"最新情报",url:"/login"},
        {text:"aniToys 1月28日 补款汇总",url:"/login"},
        {text:"aniToys 1月20日 补款汇总",url:"/login"},
        {text:"aniToys 1月19日 补款汇总",url:"/login"},
        {text:"aniToys 1月16日 补款汇总",url:"/login"},
      ],
      afterCarousel:[
        {title:"【包邮】AlphaOmega Re:从零开始的异世界生活 蕾姆 猫耳Ver.",price:1088,src:"http://127.0.0.1:5518/image/afterCarousel/ilfd2fsc0jg5oeuwj4y28j9b8yqtwwwc.jpg",url:"/login"},
        {title:"figma 吉尔伽美什",price:595,src:"http://127.0.0.1:5518/image/afterCarousel/ytwntztquhtbxe0ahvbywynos2igecft.jpg",url:"/login"},
      ],
      carousel:[
        {title:"初音未来-交响乐",src:"http://127.0.0.1:5518/image/carousel/carousel1.jpg",url:"/reg"},
        {title:"进击的巨人-利威尔",src:"http://127.0.0.1:5518/image/carousel/carousel2.jpg",url:"/reg"},
        {title:"哈利波特-马尔福",src:"http://127.0.0.1:5518/image/carousel/carousel3.jpg",url:"/reg"},
        {title:"西山居-穆玄英",src:"http://127.0.0.1:5518/image/carousel/carousel4.jpg",url:"/reg"},
        {title:"西山居-莫雨",src:"http://127.0.0.1:5518/image/carousel/carousel5.jpg",url:"/reg"},
      ],
      nav:[
        {
          title:"新品预售",
          icon:"iconfont icon-new",
          subtitle:[
          ]
        },
        {
          title:"现货",
          icon:"iconfont icon-express-model",
          subtitle:[
          ]
        },
        {
          title:"手办",
          icon:"iconfont icon-xiaorener",
          subtitle:[
            {name:"粘土人",url:"/reg"},
            {name:"可动小比例",url:""},
            {name:"等比例手办",url:""},
            {name:"盒蛋/扭蛋/食玩",url:""},
            {name:"景品",url:""},
          ]
        },
        {
          title:"模型/玩具",
          icon:"iconfont icon-legao",
          subtitle:[
            {name:"普通模型",url:""},
            {name:"拼装模型",url:""},
            {name:"软胶模型",url:""},
            {name:"汽车模型",url:""},
            {name:"模型配件",url:""},
            {name:"玩具",url:""},
          ]
        },
        {
          title:"软周边",
          icon:"iconfont icon-yifu",
          subtitle:[
            {name:"徽章",url:""},
            {name:"挂件",url:""},
            {name:"玩偶",url:""},
            {name:"钥匙圈",url:""},
            {name:"鼠标垫/桌垫",url:""},
            {name:"海报/挂画",url:""},
            {name:"手机配件",url:""},
            {name:"其他周边",url:""},
          ]
        },
        {
          title:"文具办公",
          icon:"iconfont icon-wenju",
          subtitle:[
            {name:"书签",url:""},
            {name:"胶带",url:""},
            {name:"贴纸",url:""},
            {name:"笔记本",url:""},
            {name:"文件夹",url:""},
            {name:"明信片",url:""},
            {name:"书写工具",url:""},
          ]
        },
        {
          title:"日用家居",
          icon:"iconfont icon-shafa",
          subtitle:[
            {name:"围巾/毛巾",url:""},
            {name:"镜子",url:""},
            {name:"抱枕靠垫",url:""},
            {name:"床单毛毯",url:""},
            {name:"餐饮器具",url:""},
            {name:"整理收纳",url:""},
          ]
        },
        {
          title:"箱包服饰",
          icon:"iconfont icon-Bag",
          subtitle:[
            {name:"服装",url:""},
            {name:"零钱包",url:""},
            {name:"手提包",url:""},
            {name:"双肩包",url:""},
            {name:"旅行箱",url:""},
          ]
        },
        {
          title:"演出票务",
          icon:"iconfont icon-huatong",
          subtitle:[
            {name:"演唱会",url:""},
            {name:"见面会",url:""},
            {name:"展览会",url:""},
          ]
        },
        {
          title:"演出周边",
          icon:"iconfont icon-iconfontzhengzaidingwei",
          subtitle:[
            {name:"荧光棒",url:""},
            {name:"服装",url:""},
            {name:"徽章/挂件/钥匙圈",url:""},
            {name:"写真",url:""},
            {name:"手帕/毛巾",url:""},
            {name:"零钱包/手提包",url:""},
            {name:"其他周边",url:""},
          ]
        },
        {
          title:"其他",
          icon:"iconfont icon-other",
          subtitle:[
            {name:"售后补件",url:""},
            {name:"费用",url:""},
          ]
        },
        {
          title:"热门品牌",
          icon:"iconfont icon-remen",
          subtitle:[
            {name:"Good Smile",url:""},
            {name:"Max Factory",url:""},
            {name:"Orange Route",url:""},
            {name:"Actoys",url:""},
            {name:"Hobbymax",url:""},
            {name:"MegaHouse",url:""},
            {name:"Myethos",url:""},
            {name:"Square-Enix",url:""},
            {name:"三枪",url:""},
          ]
        },
      ]
    }
  },
  components: {
    oneProduct,iFloor
  }
}
</script>

<style scoped>
.index ul{
  list-style: none;
}
.index{
  width:100%;
  display:flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.index .allPage{
  width:1200px;
}
.index .navBar{
  display: flex;
  flex-flow: row nowrap;
}
.index .navTitle div a{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 90px;
}
.index .navTitle div a span{
  font-size: 30px;
  color: #00a0d8;
}
.index .navTitle a{
  color: #000;
}
.index .navTitle a:hover{
  color: #00a0d8;
}
.index .navTitle{
  position: relative;
}
.index .navTitle ul{
  position: absolute;
  z-index: 10;
  width: 140px;
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid #fff;
  border-top: 0;
  left: -20px;
  border-radius: 0 0 10px 10px;
  justify-content: center;
  overflow: hidden;
  height: 0px;
  transition: all .3s;
  padding:0 5px;
  background: #fff;
}
.index .navTitle ul li{
  text-align: center;
  width: 100%;
}
.index .navTitle ul li a{
  width: 100%;
  display: block;
  height: 25px;
  line-height: 25px;
}
.index nav ul li:nth-child(3):hover>ul{
  height:135px;
  border: 1px solid #ddd;
  border-top:0;
}
.index nav ul li:nth-child(4):hover>ul{
  height:160px;
  border: 1px solid #ddd;
  border-top:0;
}
.index nav ul li:nth-child(5):hover>ul{
  height:210px;
  border: 1px solid #ddd;
  border-top:0;
}
.index nav ul li:nth-child(6):hover>ul{
  height: 185px;
  border: 1px solid #ddd;
  border-top:0;
}
.index nav ul li:nth-child(7):hover>ul{
  height: 160px;
  border: 1px solid #ddd;
  border-top:0;
}
.index nav ul li:nth-child(8):hover>ul{
  height: 135px;
  border: 1px solid #ddd;
  border-top:0;
}
.index nav ul li:nth-child(9):hover>ul{
  height: 85px;
  border: 1px solid #ddd;
  border-top:0;
}
.index nav ul li:nth-child(10):hover>ul{
  height: 185px;
  border: 1px solid #ddd;
  border-top:0;
}
.index nav ul li:nth-child(11):hover>ul{
  height: 60px;
  border: 1px solid #ddd;
  border-top:0;
}
.index nav ul li:nth-child(12):hover>ul{
  height: 235px;
  border: 1px solid #ddd;
  border-top:0;
}
.index nav+div{
  width: 1200px;
  height: 350px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top:5px;
}
.index nav+div .block{
  width:50%;
  border-radius: 5px;
  overflow: hidden;
}
.index nav+div .block img{
  width: 600px;
  height: 350px;
}
.index nav+div div.block~div{
  width:24%;
  height: 100%;
}
div.index > div > div.news{
  width: 100%;
  height:40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 0;
  box-shadow:0px 0px 30px -10px rgba(0, 0, 0, .3);
  border-radius: 5px;
}
div.index > div > div.news>ul{
  width: 85%;
}
div.index > div > div.news>ul>li>a{
  color:#000;
  font-size: 15px;
  transition: all .3s;
}
div.index > div > div.news>ul>li>a:hover{
  color: #00a0d8;
}
div.index > div > div.news>ul>li:first-child>a{
  font-weight: bold;
  color:#00a0d8;
}
div.index > div > div.news > ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
div.index > div > div.news >p{
  padding-right: 15px;
}
div.index > div > div.news >p>a{
  font-size: 15px;
  color: #00a0d8;
}


</style>
<style>
#app > div.index > div > div:nth-child(2) > div.block > div > ul{
  display: flex;
  align-items: center;
  transform: translateX(0);
  left: 80%;
  bottom: 5px;
}
#app > div.index > div > div > div.block > div > ul > li.is-active > button.el-carousel__button{
  width: 15px;
  height: 15px;
  background: #00a0d8;
}
#app > div.index > div > div > div.block > div > ul > li> button.el-carousel__button{
  width: 13px;
  height: 13px;
  /* border: 1px solid #00a0d8; */
  border-radius: 50%;
  background: #fff;
  opacity: 10;
}
#app > div.index > div > div.iFloor{
  margin-top: 30px;
  /* box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, .3); */
}
#app > div.index > div > div.iFloor > div:nth-child(2){
  padding: 20px 0 0;
}

#app > div.index > div > div:nth-child(4) > div:nth-child(2),
#app > div.index > div > div:nth-child(5) > div:nth-child(2),
#app > div.index > div > div:nth-child(7) > div:nth-child(2),
#app > div.index > div > div:nth-child(9) > div:nth-child(2),
#app > div.index > div > div:nth-child(12) > div:nth-child(2),
#app > div.index > div > div:nth-child(13) > div:nth-child(2),
#app > div.index > div > div:nth-child(14) > div:nth-child(2),
#app > div.index > div > div:nth-child(15) > div:nth-child(2),
#app > div.index > div > div:nth-child(16) > div:nth-child(2){
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  
}
#app > div.index > div > div.iFloor > div> div.oneProduct{
  margin-bottom: 10px;
}
#app > div.index > div > div:nth-child(4) > div> div.oneProduct,
#app > div.index > div > div:nth-child(5) > div> div.oneProduct{
  width: 23%;
  height:400px;
}
#app > div.index > div > div:nth-child(6) > div> div.oneProduct{
  float: left;
  width: 228px;
  height:300px;
  margin-left: 10px;
}
#app > div.index > div > div:nth-child(6) > div> div.oneProduct:first-child{
  height: 610px;
}
#app > div.index > div > div:nth-child(7) > div> div.oneProduct,
#app > div.index > div > div:nth-child(9) > div> div.oneProduct,
#app > div.index > div > div:nth-child(12) > div> div.oneProduct,
#app > div.index > div > div:nth-child(13) > div> div.oneProduct,
#app > div.index > div > div:nth-child(14) > div> div.oneProduct,
#app > div.index > div > div:nth-child(15) > div> div.oneProduct,
#app > div.index > div > div:nth-child(16) > div> div.oneProduct{
  width:225px;
  height:300px;
}
#app > div.index > div > div:nth-child(8) > div> div.oneProduct,
#app > div.index > div > div:nth-child(10) > div> div.oneProduct,
#app > div.index > div > div:nth-child(11) > div> div.oneProduct{
  float: left;
  width:230px;
  height:300px;
  margin-left: 10px;
}
#app > div.index > div > div:nth-child(8) > div> div.oneProduct:first-child,
#app > div.index > div > div:nth-child(10) > div> div.oneProduct:first-child,
#app > div.index > div > div:nth-child(11) > div> div.oneProduct:first-child{
  width: 460px;
  height: 610px;
}
#app > div.index > div > div:nth-child(6) > div> div.oneProduct:first-child img,
#app > div.index > div > div:nth-child(8) > div> div.oneProduct:first-child img,
#app > div.index > div > div:nth-child(10) > div> div.oneProduct:first-child img,
#app > div.index > div > div:nth-child(11) > div> div.oneProduct:first-child img{
  height: 555px;
}
</style>