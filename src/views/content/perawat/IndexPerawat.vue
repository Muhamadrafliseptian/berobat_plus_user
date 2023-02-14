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
                    <table class="table table-striped pb-5">
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
                            <tr v-for="perawat in perawats" :key="perawat.id">
                                <td class="py-1">
                                    <img :src="'./assets/images/faces/face1.jpg'" alt="image" />
                                </td>
                                <td>
                                    {{ perawat.nama }}
                                </td>
                                <td>
                                    {{ perawat.alamat }}
                                </td>
                                <td>
                                    {{ perawat.alamat }}
                                </td>
                                <td class="text-center">
                                    <router-link to=""
                                        class="btn btn-danger btn-sm me-2 text-white">Delete</router-link>
                                    <router-link to="" class="btn btn-success btn-sm text-white">Detail</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <EmptyData v-if="isEmpty" class="text-center"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EmptyData from '@/components/EmptyData.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
export default {
    data() {
        return {
            perawats: [],
            isLoading: false,
            isEmpty: false
        }
    },
    created() {
        this.getPerawat()
    },
    methods: {
        async getPerawat() {
            this.isLoading = true
            this.isEmpty = true
            const params = [].join("&")
            this.$store.dispatch("getData", ["akun/perawat", params]).then((result) => {
                console.log(result.data);
                setTimeout(() => {
                    this.isLoading = false
                    this.isEmpty = false
                    this.perawats = result.data
                }, 1000);
            }).catch((err) => {
                console.log(err);
                this.isEmpty = false
                this.isLoading = false
            });
        }
    },
    components: {
        LoadingComponent,
        EmptyData
    }
}
</script>

<style lang="scss" scoped>

</style>