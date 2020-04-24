<template>
  <div class="detail">
    <!-- 店铺顶部导航栏区域 -->
    <ul>
      <router-link v-for="(item,i) of nav" :key="i" :to="item.url" tag="li">{{item.name}}</router-link>
    </ul>
    <main>
      <!-- 图片展示和商品信息区域 -->
      <div>
        <div>
          <p>
            <img :src="myS.baseURL+details[pid].pics[onShow]"/>
            <span v-show="showMagnify" :style="`margin-left:${boxLeft}px;margin-top:${boxTop}px`"></span>
            <span @mouseenter="overMagnify()" @mouseleave="leaveMagnify()" @mousemove="magnifyMove($event)"></span>
            <span v-show="showMagnify">
              <img :src="myS.baseURL+details[pid].pics[onShow]" :style="`margin-left:${-boxLeft*2}px;margin-top:${-boxTop*2}px`"/>
            </span>
          </p>
          <div>
            <span class="iconfont icon-shangyiye" @click="picPrev()"></span>
            <div>
              <ul :style="'transition:all .3s;marginLeft:'+picsMargin+'px'">
                <li v-for="(item,i) of details[pid].pics" :key="i" @click="onShow=i" :class="{active:i==onShow}">
                  <img :src="myS.baseURL+item"/>
                </li>
              </ul>
            </div>
            <span class="iconfont icon-xiayiye" @click="picNext()"></span>
          </div>
        </div>
        <div>
          <h3>{{details[pid].title}}</h3>
          <ul>
            <li v-if="details[pid].avaiable">
              <span>现货</span>
            </li>
            <li v-if="!details[pid].avaiable">
              <span>预售</span>
            </li>
            <li>
              <span>状态</span>
              <span>{{details[pid].state}}</span>
            </li>
            <li>
              <span>价格</span>
              <span>{{details[pid].price}} 元</span>
            </li>
            <li class="deposit" v-if="!details[pid].avaiable">
              <span>定金</span>
              <span>{{details[pid].deposit}}</span>
              <span>元</span>
            </li>
            <li class="specifications">
              <span>规格</span>
              <span>{{details[pid].specifications}}</span>
            </li>
            <li class="count">
              <span>数量</span>
              <div>
                <el-input-number v-model="count" :min="1"></el-input-number>
              </div>
            </li>
            <li class="btns">
              <el-button type="danger">加入购物车</el-button>
              <el-button type="primary">立即购买</el-button>
            </li>
            <li class="underLine">
              <span class="iconfont icon-shoucang">
                <span>收藏</span>
              </span>
              <span class="iconfont icon-zixun">
                <span>咨询</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 图片展示区域结束 -->
      <div></div>
    </main>
  </div>
</template>

<script>
import myS from "../services/myService";
export default {
  data() {
    return {
      myS,
      boxLeft:0,
      boxTop:0,
      showMagnify:false,
      pid:0,
      picsMargin:0,
      onShow: 0,
      count:1,
      details: [
        {
          title: "【包邮】AlphaOmega Re:从零开始的异世界生活 蕾姆 猫耳Ver.",
          avaiable: false,
          state: "预售中",
          price: 1088,
          deposit: 200,
          specifications: "预售",
          pics: [
            "image/product/p4/1.jpg",
            "image/product/p4/2.jpg",
            "image/product/p4/3.jpg",
            "image/product/p4/4.jpg",
            "image/product/p4/5.jpg",
            "image/product/p4/6.jpg",
            "image/product/p4/7.jpg"
          ]
        }
      ],
      nav: [
        { name: "店铺首页", url: "/" },
        { name: "预售商品", url: "/" },
        { name: "现货商品", url: "/" },
        { name: "MegaHouse", url: "/" },
        { name: "Hobbymax", url: "/" },
        { name: "Union-Creative", url: "/" },
        { name: "Medicos", url: "/" }
      ]
    };
  },
  methods:{
    magnifyMove(e){
      // console.log(e);
      var left=e.offsetX-123;
      var top=e.offsetY-123;
      left<0 ? this.boxLeft=0 : left>246 ? this.boxLeft=246 : this.boxLeft=left;
      top<0 ? this.boxTop=0 : top>246 ? this.boxTop=246 : this.boxTop=top;
      // console.log(this.boxLeft,this.boxTop)
    },
    overMagnify(){
      this.showMagnify=true;
    },
    leaveMagnify(){
      this.showMagnify=false;
    },
    changeMdPic(i,e){
      this.onShow=i;
      // if(e.target.tagName=="IMG")e.target.style.border="1px solid #000"
    },
    picNext(){
      var n=108;
      if(this.picsMargin==(this.details[this.pid].pics.length-4)*-n)return;
      this.picsMargin=this.picsMargin-n;
    },
    picPrev(){
      var n=108;
      if(this.picsMargin==0)return;
      this.picsMargin=this.picsMargin+n;
    }
  }
};
</script>

<style>
div.detail {
  width: 100%;
  background: #eee;
}
div.detail > main {
  margin: 0 auto;
  width: 1200px;
}
div.detail > ul {
  display: flex;
  align-items: center;
  background: #24262c;
}
div.detail > ul > li:first-child {
  margin-left: 40px;
}
div.detail > ul > li {
  color: #fff;
  font-size: 14px;
  padding: 0 15px;
  line-height: 40px;
  background: #24262c;
  transition: all 0.3s;
  cursor: pointer;
}
div.detail > ul > li:hover {
  background: #000;
}
div.detail > main > div{
  display: flex;
  flex-flow: row nowrap;
}
#app > div.detail > main > div > div:nth-child(1){
  background: #fff;
  padding-top: 20px;
}
div.detail > main > div > div > div{
  display: flex;
  align-items: center;
  
}
div.detail > main > div > div:nth-child(1) > p{
  height: 492px;
  width: 492px;
  margin: 10px 0 10px 30px;
  position: relative;
}
div.detail > main > div > div:nth-child(1) > p>img{
  height: 100%;
  width: 100%;
}
div.detail > main > div:nth-child(1) > div:nth-child(1) > p >span{
  position: absolute;
}
div.detail > main > div:nth-child(1) > div:nth-child(1) > p > span:nth-child(3){
  width: 100%;
  height: 100%;
  left:0;
  top: 0;
}
#app > div.detail > main > div:nth-child(1) > div:nth-child(1) > p > span:nth-child(2){
  width: 246px;
  height: 246px;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: .5;
}
#app > div.detail > main > div:nth-child(1) > div:nth-child(1) > p > span:nth-child(4){
  width: 492px;
  height: 492px;
  z-index: 100;
  margin-left: 10px;
  overflow: hidden;
  /* display: none; */
}
#app > div.detail > main > div:nth-child(1) > div:nth-child(1) > p > span:nth-child(4)>img{
  width: 984px;
  height: 984px;
}
#app > div.detail > main > div:nth-child(1) > div:nth-child(1) > div{
  border: 1px solid #eee;
  margin-left: 30px;

}
div.detail > main > div > div > div >span{
  color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 30px;
  height: 110px;
  transition: all .3s;
  background: rgba(0, 0, 0, .1)
}
div.detail > main > div > div > div >span:hover{
  background: #24262c;
  color: #fff;
  cursor: pointer;
}
div.detail > main > div > div > div > div {
  width: 432px;
  overflow: hidden;
}
div.detail > main > div > div > div > div>ul{
  display: flex;

}
div.detail > main > div > div > div> div > ul > li {
  width: 108px;
  height: 108px;
  padding: 4px;
}
div.detail > main > div > div > div> div > ul > li.active{
  border: 2px solid #555;
  padding:2px;
}
div.detail > main > div > div > div> div > ul > li > img {
  height: 100%;
}
div.detail > main > div > div:nth-child(2){
  width: 100%;
  padding: 30px 100px 0;
  background: #fff;

}
#app > div.detail > main > div > div:nth-child(2) > ul > li>span:nth-child(1){
  display: inline-block;
  color: #555;
  margin:30px 30px 0 0;
}
#app > div.detail > main > div > div:nth-child(2) > ul > li:nth-child(1)>span{
  display: inline-block;
  background: #00a0d8;
  color: #fff;
  padding:0 10px;
  font-size: 14px;
  border-radius: 3px;
  padding-bottom: 1px;
}
#app > div.detail > main > div > div:nth-child(2) > ul > li:nth-child(3) > span:nth-child(2){
  display: inline-block;
  color: #00a0d8;
  font-weight: bold;
}
#app > div.detail > main > div > div:nth-child(2) > ul > li.deposit > span:nth-child(2){
  font-size: 30px;
  font-weight: bolder;
  color: #00a0d8;
}
#app > div.detail > main > div > div:nth-child(2) > ul > li.deposit > span:nth-child(3){
  color: #00a0d8;
  padding-left: 5px;
}
#app > div.detail > main > div > div:nth-child(2) > ul > li.specifications> span:nth-child(2){
  color: #00a0d8;
  padding: 5px 10px 6px;
  border-radius: 5px;
  border: 2px solid #00a0d8;
  cursor: pointer;
}
#app > div.detail > main > div > div:nth-child(2) > ul > li.count{
  display: flex;
  align-items: center;
  margin-top: 30px;
}
#app > div.detail > main > div > div:nth-child(2) > ul > li.count > span{
  margin: 0 30px 0 0;
}
#app > div.detail > main > div > div:nth-child(2) > ul > li.btns{
  margin: 30px 0 30px 60px;
}
#app > div.detail > main > div > div:nth-child(2) > ul > li.underLine{
  width: 100%;
  margin-top: 50px;
  border-top: 1px dashed #ddd;
  display: flex;
}
#app > div.detail > main > div > div:nth-child(2) > ul > li.underLine>span.iconfont{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin:10px;
  font-size: 30px;
  color: #555;
  transition: all .3s;
}
#app > div.detail > main > div > div:nth-child(2) > ul > li.underLine>span.iconfont:hover{
  color: #00a0d8;
  cursor: pointer;
}
#app > div.detail > main > div > div:nth-child(2) > ul > li.underLine>span.iconfont>span{
  font-size: 14px;
}
/* 组件样式 */
#app > div.detail > main > div > div:nth-child(2) > ul > li:nth-child(7) > button.el-button{
  width: 120px;
}
</style>