import { createRouter, createWebHistory } from 'vue-router';

import MessageReceived from './pages/messages/MessageReceived.vue';
import ContactTutor from './pages/messages/ContactTutor.vue';
import Tutor from './pages/tutors/Tutor.vue';
import TutorSignup from './pages/tutors/TutorSignup.vue';
import TutorList from './pages/tutors/TutorList.vue';
import notFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/tutors',
    },
    {
      path: '/tutors',
      component: TutorList,
    },
    {
      path: '/tutors/:id',
      component: Tutor,
      children: [
        {
          path: '/contact',
          component: ContactTutor,
        },
      ],
    },
    {
      path: '/signup',
      component: TutorSignup,
    },
    {
      path: '/messages',
      component: MessageReceived,
    },
    {
      path: '/:notFound(.*)',
      component: notFound,
    },
  ],
});

export default router;
