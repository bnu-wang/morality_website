import { createRouter, createWebHashHistory } from 'vue-router'

import experDefault from '../view/home/index.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: experDefault
    },
    {
      path: "/introduction",
      name: "introduction",
      component: () => import("../view/introduction/index.vue")
    },
    {
      path: "/pilot",
      name: "pilot",
      component: () => import("../view/pilot/index.vue")
    },
    {
      path: "/sos",
      name: "sos",
      component: () => import("../view/sos/index.vue")
    }
  ]
});

// router.beforeEach((_, _, next) => {
//   next();
// });

export default router;