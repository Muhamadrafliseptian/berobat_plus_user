<template>
    <div class="container-scroller">
        <HeaderAdmin />
        <div class="container-fluid page-body-wrapper">
            <SidebarAdmin />
            <div class="main-panel">
                <div class="content-wrapper">
                    <router-view />
                </div>
                <FooterAdmin />
            </div>
        </div>
      </div>
</template>

<script>
import HeaderAdmin from './components/HeaderAdmin.vue';
import SidebarAdmin from './components/SidebarAdmin.vue';
import FooterAdmin from './components/FooterAdmin.vue';

export default {
    name: "DashboardAll",
    components: {
        HeaderAdmin,
        SidebarAdmin,
        FooterAdmin
    }
}
</script>

<style>

</style>
