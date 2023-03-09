import DashboardAdmin from '@/views/content/DashboardAdmin.vue';
import LoginAdmin from './modules/auth';
import Dokter from './modules/dokter';
import Apotek from './modules/apotek'
import Perawat from './modules/perawat'
import Admin from './modules/admin'
import Konsumen from './modules/konsumen'
const routes = [

    ...LoginAdmin,
    ...Dokter,
    ...Apotek,
    ...Perawat,
    ...Admin,
    ...Konsumen,
    {
        path: '/',
        name: "DashboardAdmin",
        component: DashboardAdmin
    },
]


export default routes