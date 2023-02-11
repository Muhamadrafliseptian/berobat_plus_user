import DashboardAdmin from '@/views/content/DashboardAdmin.vue';
import LoginAdmin from './modules/auth';

const routes = [

    ...LoginAdmin,

    {
        path: '/',
        name: "DashboardAll",
        component: DashboardAdmin
    },
]


export default routes