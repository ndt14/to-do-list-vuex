<template>
  <div class="todo-list container mt-2">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên</th>
          <th scope="col">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <todo-item-vue v-for="(todo, index) in todos" :key="index" :todo="{ todo, index }" :index="index" />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoItemVue from './TodoItem.vue';

export default {
  name: 'todo-list',
  computed: {
    ...mapGetters(['todos', 'ttodos']),
  },
  components: {
    TodoItemVue,
  },
};
</script>

<style>
</style>