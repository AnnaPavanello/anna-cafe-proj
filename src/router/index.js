import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ranking from '../views/RankingView.vue'
import Avaliacao from '../views/AvaliacaoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking,
    },
    {
      path: '/avaliacao',
      name: 'avaliacao',
      component: Avaliacao,
    },
  ],
})

export default router
