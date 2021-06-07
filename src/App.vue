<template id="appVue">
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div id="mainDiv">
    <NavBar></NavBar>
    <router-view />
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import { Slide } from 'vue-burger-menu'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Slide
    NavBar
  }
}
</script>

<style>
#body{
  margin:0px;
  padding: 0px;
}

#app {
  padding: 0px;
  margin-top: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: black; */
}

#mainDiv{
  margin:0px;
  padding:0px;
  /* background: blue; */
}


</style>
