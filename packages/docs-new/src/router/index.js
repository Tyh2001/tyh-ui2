import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout.vue'),
    children: [
      { path: '', component: () => import('@/views/home.vue') },
      { path: '/about', component: () => import('@/views/about.vue') },
      {
        path: '/component',
        redirect: '/component/install',
        component: () => import('@/views/component.vue'),
        children: [
          {
            path: '/component/install',
            component: () => import('@/views/TyhUi/install.vue')
          },
          {
            path: '/component/color',
            component: () => import('@/views/TyhUi/color.vue')
          },
          {
            path: '/component/container',
            component: () => import('@/views/TyhUi/container.vue')
          },
          {
            path: '/component/button',
            component: () => import('@/views/TyhUi/button.vue')
          },
          {
            path: '/component/list',
            component: () => import('@/views/TyhUi/list.vue')
          },
          {
            path: '/component/card',
            component: () => import('@/views/TyhUi/card.vue')
          },
          {
            path: '/component/tag',
            component: () => import('@/views/TyhUi/tag.vue')
          },
          {
            path: '/component/link',
            component: () => import('@/views/TyhUi/link.vue')
          },
          {
            path: '/component/input',
            component: () => import('@/views/TyhUi/input.vue')
          },
          {
            path: '/component/menu',
            component: () => import('@/views/TyhUi/menu.vue')
          },
          {
            path: '/component/division',
            component: () => import('@/views/TyhUi/division.vue')
          },
          {
            path: '/component/icon',
            component: () => import('@/views/TyhUi/icon.vue')
          },
          {
            path: '/component/crumbs',
            component: () => import('@/views/TyhUi/crumbs.vue')
          },
          {
            path: '/component/turnPage',
            component: () => import('@/views/TyhUi/turnPage.vue')
          },
          {
            path: '/component/backTop',
            component: () => import('@/views/TyhUi/backTop.vue')
          },
          {
            path: '/component/message',
            component: () => import('@/views/TyhUi/message.vue')
          },
          {
            path: '/component/skeleton',
            component: () => import('@/views/TyhUi/skeleton.vue')
          },
          {
            path: '/component/alert',
            component: () => import('@/views/TyhUi/alert.vue')
          },
          {
            path: '/component/rate',
            component: () => import('@/views/TyhUi/rate.vue')
          },
          {
            path: '/component/image',
            component: () => import('@/views/TyhUi/image.vue')
          },
          {
            path: '/component/avatar',
            component: () => import('@/views/TyhUi/avatar.vue')
          },
          {
            path: '/component/text',
            component: () => import('@/views/TyhUi/text.vue')
          },
          {
            path: '/component/table',
            component: () => import('@/views/TyhUi/table.vue')
          },
          {
            path: '/component/switch',
            component: () => import('@/views/TyhUi/switch.vue')
          },
          {
            path: '/component/calendar',
            component: () => import('@/views/TyhUi/calendar.vue')
          },
          {
            path: '/component/radio',
            component: () => import('@/views/TyhUi/radio.vue')
          },
          {
            path: '/component/tree',
            component: () => import('@/views/TyhUi/tree.vue')
          },
          {
            path: '/component/pageHeader',
            component: () => import('@/views/TyhUi/pageHeader.vue')
          },
          {
            path: '/component/info',
            component: () => import('@/views/TyhUi/info.vue')
          },
          {
            path: '/component/textarea',
            component: () => import('@/views/TyhUi/textarea.vue')
          },
          {
            path: '/component/select',
            component: () => import('@/views/TyhUi/select.vue')
          },
          {
            path: '/component/tagging',
            component: () => import('@/views/TyhUi/tagging.vue')
          },
          {
            path: '/component/notification',
            component: () => import('@/views/TyhUi/notification.vue')
          },
          {
            path: '/component/drawer',
            component: () => import('@/views/TyhUi/drawer.vue')
          },
          {
            path: '/component/dialog',
            component: () => import('@/views/TyhUi/dialog.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
