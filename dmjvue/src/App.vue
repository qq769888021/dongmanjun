<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from "./components/myHeader.vue"
export default {
  components:{
    myHeader
  }
}
</script>

<style>

</style>
