<template>
  <div>
    <todo-input-vue />
    <todo-list-vue />
  </div>
</template>

<script>
import TodoInputVue from './TodoInput.vue';
import TodoListVue from './TodoList.vue';

export default {
  name: 'mana-vue',
  components: {
    TodoInputVue,
    TodoListVue,
  },
};
</script>

<style>
</style>