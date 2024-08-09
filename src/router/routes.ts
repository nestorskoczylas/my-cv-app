import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path:'/',
    redirect: '/aboutme'
  },
  {
    path: '/aboutme',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/aboutme', name: 'aboutme', component: () => import('pages/IndexPage.vue') },
      { path: '/cv', name: 'cv', component: () => import('pages/CvPage.vue') },
      { path: '/experience/:id', name: 'experience', component: () => import('pages/ExperiencePage.vue'), props: true },
      { path: '/projects', name: 'projects', component: () => import('pages/ProjectsPage.vue') },
    ],
  },
];

export default routes;
