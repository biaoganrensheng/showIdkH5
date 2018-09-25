<template>
  <div id="app">
  <div id="allmap"></div>
    <!-- <keep-alive> -->
      <transition name="slide-fade">
          <router-view :shouldChangeCity="shouldChangeCity" :cityName="cityName" :curCompany="curCompany" />
      </transition>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  data() {
    return {
      cityName:'正在定位',
      shouldChangeCity:true,
      curCompany:{}
    }
  }
}
</script>

<style>
html,body{
  background-color: #f8f8f8;
  font-size:1.4rem;
  line-height: 1.2;
}
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}
ul,li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(50px);
  opacity: 0;
}
</style>
