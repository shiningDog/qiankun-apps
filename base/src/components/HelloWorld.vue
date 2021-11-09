<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="container"></div>
  </div>
</template>

<script>
// import {  start } from "qiankun";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    // start()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
#container {
  min-height: 300px;
  border: 1px solid #000;
}
</style>
