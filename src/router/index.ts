import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter( {
	history: createWebHistory( import.meta.env.BASE_URL ),
	routes: [
		{
			path: '/',
			name: 'index',
			redirect: '/self-builder'
		},
		{
			path: '/self-builder',
			name: 'SelfBuilder',
			component: () => import('../views/SelfBuilderPage/SelfBuilderPage.vue'),
		},
	]
} )

export default router
