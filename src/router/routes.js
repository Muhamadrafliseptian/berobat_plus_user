import DashboardAdmin from '@/views/content/DashboardAdmin.vue';
import LoginAdmin from './modules/auth';
import Dokter from './modules/dokter';
import EditDokter from './modules/dokter';
const routes = [

    ...LoginAdmin,
    ...Dokter,
    ...EditDokter,
    {
        path: '/',
        name: "DashboardAdmin",
        component: DashboardAdmin
    },
]


export default routes