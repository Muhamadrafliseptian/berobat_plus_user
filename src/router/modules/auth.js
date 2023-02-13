export default[{
    path: '/login',
    name: "LoginAdmin",
    component: () => import('@/views/auth/LoginAdmin.vue'),

    meta: {
        middleware: 'guest',
    }
}]