import { createRouter, createWebHistory } from 'vue-router';

const pages = import.meta.glob('../pages/**/*.vue');

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\/pages\/(.*)\.vue$/)?.[1];
  const routePath = name === 'Home' ? '/' : `/${name?.toLowerCase()}`;

  return {
    path: routePath,
    name: name,
    component: pages[path],
    meta: { layout: 'BlankLayout' }, // Default to BlankLayout
  };
});

// Override specific routes
const specificRoutes = [
  {
    path: '/',
    name: 'Home',
    component: pages['../pages/Home.vue'],
    meta: { layout: 'DefaultLayout' }, // Home uses DefaultLayout
  },
  // {
  //   path: '/tab2',
  //   name: 'Tab2',
  //   component: pages['../pages/TabCont2.vue'],
  //   meta: { layout: 'AuthLayout' }, // Tab2 uses AuthLayout
  // },
];

// Merge and prioritize specific routes
const finalRoutes = routes.map(route => {
  const specific = specificRoutes.find(s => s.name === route.name);
  return specific ? { ...route, ...specific } : route;
});

const router = createRouter({
  history: createWebHistory(),
  routes: finalRoutes,
});

export default router;