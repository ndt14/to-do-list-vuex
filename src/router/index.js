import Vue from 'vue';
import Router from 'vue-router';
import UpdateTodo from '../components/UpdateTodo.vue';
import Mana from '../components/Mana.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'admin',
    component: Mana,
  },

  {
    path: '/update/:id',
    name: 'updateTodo',
    component: UpdateTodo,
  },
];

const router = new Router({
  routes,
});

export default router;
