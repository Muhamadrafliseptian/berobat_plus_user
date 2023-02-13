<template>
    <div class="row pb-3">
        <div class="col-6 text-start">
            <h4 class="card-title">
                Data Dokter
            </h4>
        </div>
        <div class="col-6 text-end">
            <a href="" class="btn btn-sm btn-primary px-4">Tambah Data +</a>
        </div>
    </div>
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <LoadingComponent v-if="isLoading"   />
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>
                                    Foto
                                </th>
                                <th>
                                    Nama
                                </th>
                                <th>
                                    Alamat
                                </th>
                                <th>
                                    Nomor Telepon
                                </th>
                                <th class="text-center">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dokter in dokters" :key="dokter.id">
                                <td class="py-1">
                                    <img :src="'./assets/images/faces/face1.jpg'" alt="image" />
                                </td>
                                <td>
                                    {{ dokter.userId.nama }}
                                </td>
                                <td>
                                    {{ dokter.userId.alamat }}
                                </td>
                                <td>
                                    {{ dokter.idDokter }}
                                </td>
                                <td class="text-center">
                                    <router-link to=""
                                        class="btn btn-danger btn-sm me-2 text-white">Delete</router-link>
                                    <router-link to="" class="btn btn-success btn-sm text-white">Detail</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoadingComponent from '@/components/LoadingComponent.vue';
export default {
    data() {
        return {
            dokters: [],
            isLoading: false
        }
    },
    created() {
        this.getDokter()
    },
    methods: {
        async getDokter() {
            this.isLoading = true
            const params = [].join("&")
            this.$store.dispatch("getData", ["akun/dokter", params]).then((result) => {
                setTimeout(() => {
                    this.isLoading = false
                    this.dokters = result.data
                }, 1000);
            }).catch((err) => {
                console.log(err);
                this.isLoading = false
            });
        }
    },
    components: {
        LoadingComponent
    }
}
</script>

<style lang="scss" scoped>

</style>