export default [{
    path: '/apotek',
    name: 'Apotek',
    component: () => import('@/views/content/apotek/IndexApotek')
},
{
    path: '/apotek/create',
    name: 'TambahApotek',
    component: () => import('@/views/content/apotek/TambahApotek')
},
{
    path: '/apotek/:id/edit',
    name: 'EditApotek',
    component: () => import('@/views/content/apotek/EditApotek'),
    params: true
}
]