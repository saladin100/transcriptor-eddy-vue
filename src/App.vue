<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  margin-top: 150px;
  text-align: center;
  color: #2c3e50;
}


.swal-text { 
  padding:0px;
  text-align: center ;
  color: #61534e;
}
.swal-footer {
  background-color: rgb(245, 248, 250);
  margin-top: 32px;
  border-top: 1px solid #E9EEF1;
  overflow: hidden;
}

.swal-button {
  
  
  background-color: #4962B3;  
  
}
</style>
