<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}

</script>

<template>
  <Navbar/>
  <router-view />
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 45px;
}


</style>
