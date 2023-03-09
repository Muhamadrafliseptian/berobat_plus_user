export default [{
    path: '/apotek',
    name: 'Apotek',
    component: () => import('@/views/content/apotek/IndexApotek')
},
{
    path: '/apotek/create',
    name: 'TambahApotek',
    component: () => import('@/views/content/apotek/TambahApotek')
}]