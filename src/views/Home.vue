<template>
  <div class="home">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 ">
          <h1>Transcriptor Eddy</h1>
        </div>
      </div>

      <DragNDropField></DragNDropField>

      
    </div>
  </div>
</template>

<script>
import DragNDropField from "../components/DragNDropField.vue";
export default {
  name: "home",
  
  components: {
    DragNDropField: DragNDropField,
  }
};
</script>

<style scoped>
</style>