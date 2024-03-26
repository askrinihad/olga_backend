// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../components/SignIn.vue';
import Home from '../views/Home.vue'; // Page with the button to fetch Firestore documents

const routes = [
  { path: '/', component: Home },
  { path: '/signin', component: SignIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
