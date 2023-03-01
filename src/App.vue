<template>
    <template v-if="token">
        <div class="container-scroller">
            <HeaderAdmin />
            <div class="container-fluid page-body-wrapper">
                <SidebarAdmin />
                <div class="main-panel">
                    <div class="content-wrapper">
                        <router-view/>
                    </div>
                    <FooterAdmin />
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <router-view />
    </template>
</template>

<script>
import Cookies from 'js-cookie';
import HeaderAdmin from './components/HeaderAdmin.vue';
import SidebarAdmin from './components/SidebarAdmin.vue';
import FooterAdmin from './components/FooterAdmin.vue';

export default {
    data() {
        return {
            token: Cookies.get("token"),
            publicPath: process.env.BASE_URL
        }
    },
    components: {
        HeaderAdmin,
        SidebarAdmin,
        FooterAdmin
    },
}
</script>

<style>

</style>
