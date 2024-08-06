import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path:'/',
    redirect: '/aboutme'
  },
  {
    path: '/aboutme',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/aboutme', name: 'aboutme', component: () => import('pages/IndexPage.vue') }],
  },
];

export default routes;
