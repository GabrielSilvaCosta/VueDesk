import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', name: 'dashboard', component: () => import('@/views/DashboardView.vue') },
        { path: 'usuarios', name: 'usuarios', component: () => import('@/views/UsersView.vue') },
        { path: 'configuracoes', name: 'configuracoes', component: () => import('@/views/SettingsView.vue') },
      ],
    },
  ],
})

export default router
