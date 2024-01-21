<template>
  <div class="todo-input container">
    <form class="row">
      <div class="form-group col-10">
        <input type="text" class="form-control" :value="todoText" @change="todoTextChange" />
      </div>

      <button type="submit" class="btn btn-primary col-2" @click.prevent="addTodoo">add</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from 'uuid';

export default {
  name: 'todo-input',
  data() {
    return {
      todoText: '',
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    todoTextChange(e) {
      this.todoText = e.target.value;
      console.log(this.todoText);
    },
    addTodoo() {
      this.addTodo({
        id: v1(),
        title: this.todoText,
        complete: false,
      });
      this.todoText = '';
    },
  },
};
</script>

<style>
.todo-input {
  max-width: 800px;
}
</style>