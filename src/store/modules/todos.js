const todoModule = {
  state: {
    ttodos: [],
    todos: [
      {
        id: 1,
        title: 'One',
        complete: true,
      },
      {
        id: 2,
        title: 'Three',
        complete: true,
      },
      {
        id: 3,
        title: 'Four',
        complete: false,
      },
    ],
  },
  getters: {
    todos: (state) => state.todos,
    ttodos: (state) => state.ttodos,
  },
  mutations: {
    delete_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
      this.todos = state.todos;
    },
    add_todo(state, todo) {
      state.todos.push(todo);
      this.todos = state.todos;
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex((todos) => todos.id == todo.id);
      if (index != -1) {
        state.todos[index] = todo;
      }
    },
  },
  actions: {
    deleteTodo({ commit }, id) {
      commit('delete_todo', id);
    },

    addTodo({ commit }, todo) {
      commit('add_todo', todo);
    },

    updateTodo({ commit }, todo) {
      commit('update_todo', todo);
    },
  },
};

export default todoModule;
