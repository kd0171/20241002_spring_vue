<template>
  <div>
    <h1>About Page</h1>
    <p>This is a simple ToDo application built with Vue 3 and Spring Boot.</p>
    <router-link to="/">Go Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'  // 名前を複合単語に変更
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
