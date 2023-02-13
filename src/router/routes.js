import DashboardAdmin from '@/views/content/DashboardAdmin.vue';
import LoginAdmin from './modules/auth';
import Dokter from './modules/dokter';
const routes = [

    ...LoginAdmin,
    ...Dokter,
    {
        path: '/',
        name: "DashboardAll",
        component: DashboardAdmin
    },
]


export default routes