export default [
    {
        path: '/download-app',
        name: 'Download App',
        component: ()=>import('@/views/content/download-page/IndexDownload.vue')
    },
    {
        path: '/riwayat',
        name: 'Riwayat Konsumen',
        component: ()=>import('@/views/content/riwayat/IndexRiwayat.vue')
    },
    {
        path: '/reservasi-perawat',
        name: 'Reservasi Perawat',
        component: () => import('@/views/content/perawat/IndexPerawat.vue')
    },
    {
    path: '/produk',
        name: 'Data Produk',
        component: () => import('@/views/content/obat-produk/IndexProduk.vue')
    },
    {
        path: '/produk/:id',
        name: 'Detail Produk',
        component: () => import('@/views/content/obat-produk/DetailProduk.vue')
    },
    {
        path: '/produk/kategori/:idKategori',
        name: 'Produk Kategori',
        component: () => import('@/views/content/apotek/IndexObatApotek.vue')
    },
    {
        path: '/test_ongkir',
        component: () => import('@/views/content/test-ongkir/IndexOngkir.vue')
    },
    {
        path: '/keranjang',
        component: () => import('@/views/content/checkout-page/IndexCheckout.vue')
    }
]