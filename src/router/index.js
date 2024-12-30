import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/Home.vue';
import MenuPage from '../components/Menu.vue'
import CartPage from '../components/CartPage.vue';
import ContactPage from '../components/ContactsPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/menu', name: 'AppMenu',component: MenuPage},
  { path: '/contact', name: 'Contact',component: ContactPage },
  { path: '/cart', name: 'Cart',component: CartPage },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
