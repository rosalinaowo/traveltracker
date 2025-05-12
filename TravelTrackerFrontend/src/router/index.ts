import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AllTravelsView from '@/views/AllTravelView.vue'
import LoginView from '@/views/LoginView.vue'
import UserPageView from '@/views/UserPageView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/allTravels',
      name: 'allTravels',
      component: AllTravelsView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/userPage',
      name: 'userPage',
      component: UserPageView
    },
    

    // se facciamo una search view separata
    // {
    //   path: '/search',
    //   name: 'search',
    //   component: SearchView
    // },

    // Nel caso mettiamo una about view: si potrebbe mettere in un footer?
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: AboutView
    // },

    // Nel caso mettiamo un carrello
    // {
    //   path: '/shoppingCart',
    //   name: 'shoppingCart',
    //   component: ShoppingCartView
    // },

    //Per la pagina non trovata (qualsiasi link che non viene trovato prima porta qua), fare pagina 404
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFoundView
    },
  ],
})

export default router
