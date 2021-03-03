import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/tutors',
    },
    {
      path: '/tutors',
      component: null,
    },
    {
      path: '/tutors/:id',
      component: null,
      children: [
        {
          path: '/contact',
          component: null,
        },
      ],
    },
    {
      path: '/signup',
      component: null,
    },
    {
      path: '/messages',
      component: null,
    },
    {
      path: '/:notFound(.*)',
      component: null,
    },
  ],
});

export default router;
