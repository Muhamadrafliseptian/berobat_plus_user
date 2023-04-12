export default[{
    path: '/toko-kesehatan',
    name: 'TokoKesehatan',
    component: () =>import('@/views/content/IndexShop.vue')
},
{
    path: '/toko-kesehatan/detail-medicine',
    name: 'DetailMedicine',
    component: () =>import('@/views/content/DetailMedicine.vue')
}    
]