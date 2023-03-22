import { createRouter, createWebHistory } from 'vue-router'

//without defineAsyncComponent
const lazyLoad = (view: any) => {
  return () => import(`../views/${view}.vue`);
}

// with defineAsyncComponent
// const lazyLoad = (view: any) => defineAsyncComponent(
//   () => import(`../views/${view}.vue`)
// )

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoad('HomeView')
    },
    {
      path: '/about',
      name: 'about',
      component: lazyLoad('AboutView')
    },
    {
      path: '/demo',
      name: 'demo',
      component: lazyLoad('DemoView')
    }
  ]
})

export default router
