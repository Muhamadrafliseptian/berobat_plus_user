export default [
    {
        path: '/dokter',
        name: "Dokter",
        component: () => import('@/views/content/dokter/IndexDokter')
    },
    {
        path: '/dokter/:id/edit',
        name: "EditDokter",
        component: () => import('@/views/content/dokter/EditDokter'),
        params: true
    }
]