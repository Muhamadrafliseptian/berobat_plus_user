export default [
    {
        path: '/hospital',
        name: "Rumah Sakit Terdekat",
        component: () => import('@/views/content/rumah-sakit/index-rumah-sakit/IndexHospital.vue')
    },
    {
        path: '/detail_rumah_sakit/:id',
        name: 'Detail Hospital',
        component: () => import('@/views/content/rumah-sakit/index-rumah-sakit/DetailHospital.vue'),
    },
    {
        path: '/detail_rumah_sakit/:idPenyakit/:id',
        name: 'Detail Spesialis Rs',
        component: () => import('@/views/content/rumah-sakit/index-rumah-sakit/DetailSpesialisRs.vue'),
    },
    {
        path: '/detail_rumah_sakit/buat_janji/:idAhli/:idDetailPraktek/:idRumahSakit/:idSpesialis',
        name: 'Detail Janji Rs',
        component: () => import('@/views/content/rumah-sakit/janji-rs/IndexJanjiRs.vue'),
    },
    {
        path: '/buat_janji/:idAhli/:idJadwalPraktek',
        name: 'Detail Janji',
        component: () => import('@/views/content/rumah-sakit/janji-rs/DetailJanjiRs.vue'),
        meta: {
            requiresAuth: true
        }
    },
]