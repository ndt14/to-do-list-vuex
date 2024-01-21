<template>
  <div>
    <h1>Update Todo</h1>
    <input v-model="updatedTodoText" type="text" />
    <button @click="updateTodos" class="btn btn-primary mx-2">Update</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'update-todo',
  data() {
    return {
      updatedTodoText: this.$route.params.title || '',
    };
  },
  methods: {
    ...mapActions(['updateTodo']),
    updateTodos() {
      const updatedTodo = {
        id: this.$route.params.id,
        title: this.updatedTodoText,
      };

      this.updateTodo(updatedTodo);
      this.$router.push('/');
    },
  },
};
</script>

<style>
</style>
