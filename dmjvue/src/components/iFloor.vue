<template>
  <div class="iFloor">
    <div>
      <router-link :to="url">
      <h2>
        <span>{{floor}}</span>
        <span :class="iconClass"></span>
        &nbsp;&nbsp;&nbsp; &nbsp;
        <span>{{floorTitle}}</span>
      </h2>
      </router-link>
      <router-link :to="url">查看更多</router-link>
    </div>
    
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    iconClass:{default:""},
    floorTitle:{default:""},
    floor:{default:""},
    url:{default:""},
  },
  components:{
    
  }
}
</script>

<style>
/* div.iFloor{
  border: 1px solid #ddd;
  border-radius: 10px 10px 0 0;
} */
div.iFloor>div:first-child{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  /* border-bottom: 1px solid #ddd; */
  height: 60px;
  border-radius: 10px 10px 0 0;
}
div.iFloor>div>a{
  color: #555;
  transition: all .3s;
}
div.iFloor>div>a:hover{
  color: #00a0d8;
}
div.iFloor>div>a>h2>span:nth-child(2){
  font-size: 35px;
  display: inline-block;
}
div.iFloor>div>a>h2>span:first-child{
  font-size:35px;
  font-weight: bolder;
  display: inline-block;
}
div.iFloor::after{
  content: "";
  display: block;
  clear: both;
  height: 10px;
}
</style>