<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
 
  components: {
    Navbar,Footer
  },
};
</script>


<style >
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  margin-top:100px;
  
  color: #2c3e50;
}

.swal-text {
  padding: 0px;
  text-align: center;
  color: #61534e;
}
.swal-footer {
  background-color: rgb(245, 248, 250);
  margin-top: 32px;
  border-top: 1px solid #e9eef1;
  overflow: hidden;
}

.swal-button {
  background-color: #4962b3;
}
</style>

