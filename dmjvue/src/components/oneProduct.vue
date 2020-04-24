<template>
<div class="oneProduct">
  <router-link :to="url">
    <div>
      <img :src="src">
    </div>
    <div>
      <h2>{{title}}</h2>
      <span>¥ {{price}}</span>
    </div>
  </router-link>
</div>
</template>

<script>
export default {
  props:{
    url:{default:""},
    src:{default:""},
    title:{default:""},
    price:{default:""},
  }
}
</script>

<style scoped>
.oneProduct{
  width: 100%;
  height:100%;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  overflow: hidden;
  border: 1px solid #ddd;
  transition: all .3s;
  border-radius: 5px;
}
.oneProduct:hover{
  border-color: #999;
}
.oneProduct a{
  overflow: hidden;
  width: 100%;
  height:100%;
}
.oneProduct div:first-child{
  width:100%;
  height:85%;
  display:flex;
  justify-content: center;
}
.oneProduct div:first-child img{
  height: 100%;
}
.oneProduct div:last-child{
  width:100%;
  height:100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom:-43px;
  z-index: 20;
  transition: all .3s;
}
.oneProduct a:hover div:last-child{
  background: rgba(0,0,0,.5);
  bottom:0px;
}
.oneProduct a div:last-child h2{
  text-align: center;
  width: 100%;
  font-size: 14px;
  color:#000;
  line-height:30px;
  transition: all .3s;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  padding: 0 5px;
}
.oneProduct a div:last-child span{
  line-height: 40px;
  justify-content: center;
  transition: all .3s;
  color: #000;
}
.oneProduct a:hover div:last-child h2{
  -webkit-line-clamp: 2;
}
.oneProduct a:hover div:last-child h2,.oneProduct a:hover div:last-child span{
  color: #fff;
}
</style>