import { createRouter, createWebHistory } from 'vue-router';
import TodoApp from '../components/TodoApp.vue'; // TodoApp コンポーネント
import AboutPage from '../components/AboutPage.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: TodoApp
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
