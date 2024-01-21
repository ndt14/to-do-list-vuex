<template>
  <tr>
    <th scope="row">{{ index + 1 }}</th>
    <td>{{ todo.todo.title }}</td>
    <td>
      <router-link :to="{ name: 'updateTodo', params: { id: todo.todo.id, title: todo.todo.title } }">
        <button class="btn btn-primary mx-2">Edit</button>
      </router-link>

      <button @click="deleteTodo(todo.todo.id)" class="btn btn-danger">Delete</button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'todo-item',
  data() {
    return {
      todoText: '',
      editing: false,
    };
  },
  props: {
    todo: {
      type: Object,
      require: true,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    ...mapActions(['deleteTodo', 'updateTodo']),
    // goToUpdatePage() {
    //   this.$router.push(`/update/${this.todo.todo.id}`);
    // },
  },
};
</script>

<style>
</style>