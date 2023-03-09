export default [
    {
    path: '/konsumen',
    name: "Konsumen",
    component: () => import('@/views/content/konsumen/IndexKonsumen')
    },
    {
        path: '/konsumen/:id/edit',
        name: "DetailKonsumen",
        component: () => import('@/views/content/konsumen/DetailKonsumen'),
        params: true,
    }
]