<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/admin">admin</router-link> -->
      <!-- <router-link to="/admin-edit/">Admin</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<script>
// import TodoInputVue from './components/TodoInput.vue';
// import TodoListVue from './components/TodoList.vue';

export default {
  name: 'App',
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
