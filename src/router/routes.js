import DashboardAdmin from '@/views/content/DashboardAdmin.vue';
import LoginAdmin from './modules/auth';
import Dokter from './modules/dokter';
import Apotek from './modules/apotek'
import Perawat from './modules/perawat'
const routes = [

    ...LoginAdmin,
    ...Dokter,
    ...Apotek,
    ...Perawat,
    {
        path: '/',
        name: "DashboardAdmin",
        component: DashboardAdmin
    },
]


export default routes