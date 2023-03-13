<template>
    <div class="row pb-3">
        <div class="col-6 text-start">
            <h4 class="card-title">
                Data Konsumen
            </h4>
        </div>
    </div>
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
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
                                    NIK
                                </th>
                                <th>
                                    Nomor HP
                                </th>
                                <th>
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in konsumens" :key="user.id">
                                <td class="py-1">
                                    {{ user.user.foto }}
                                </td>
                                <td>
                                    {{ user.user.nama }}
                                </td>
                                <td>
                                    {{ user.user.alamat }}
                                </td>
                                <td>
                                    {{ user.nik }}
                                </td>
                                <td>
                                    {{ user.user.nomorHp }}
                                </td>
                                <td>
                                    <router-link :to="'/konsumen/' + user.idKonsumen + '/edit'">
                                        <ButtonAction message="detail" class="btn-warning" />
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <LoadingComponent v-model:active="isLoading" />
            </div>
        </div>
    </div>
</template>

<script>
import LoadingComponent from '@/components/LoadingComponent.vue';
import ButtonAction from '@/components/ButtonAction.vue';
export default {
    data() {
        return {
            konsumens: [],
            isLoading: false,
            isActive: false,
            status: 0
        }
    },
    created() {
        this.getKonsumen()
    },
    methods: {
        getKonsumen() {
            const self = this
            var type = "getData";
            var url = [
                "akun/konsumen", {
                }
            ]
            self.isLoading = true
            const params = [].join("&")
            self.$store.dispatch(type, url, params).then((result) => {
                console.log(result);
                setTimeout(() => {
                    self.isLoading = false
                    self.konsumens = result.data
                }, 1000);
            }).catch((err) => {
                console.log(err);
                self.isLoading = false
            });
        },
    },
    components: {
        LoadingComponent, ButtonAction
    }
}
</script>