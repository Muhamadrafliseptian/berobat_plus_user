<template>
    <div class="row pb-3">
        <div class="col-6 text-start">
            <h4 class="card-title">
                Data Dokter
            </h4>
        </div>
        <div class="col-6 text-end">
            <ButtonAction class="btn-primary " @click="$router.push('/dokter/create')" message="Tambah Data +" />

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
                                    Nomor STR
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
                                    {{ dokter.nomorStr }}
                                </td>
                                <td class="text-center">
                                    <ButtonAction class="btn-warning " @click="deleteDokter(dokter.idDokter)"
                                        message="edit" />
                                    <ButtonAction class="btn-danger " @click="deleteDokter(dokter.idDokter)"
                                        message="delete" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <LoadingComponent v-if="isLoading" />
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
                console.log(result);
                setTimeout(() => {
                    this.isLoading = false
                    this.dokters = result.data
                }, 1000);
            }).catch((err) => {
                console.log(err);
                this.isLoading = false
            });
        },
        deleteDokter(idDokter) {
            const self = this
            this.$swal({
                icon: 'question',
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Delete',
                denyButtonText: `Dont delete`,
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        self.$store.dispatch("deleteData", ["akun/dokter", idDokter])
                        this.$swal({
                            icon: "success",
                            text: "Data Anda Berhasil di Hapus",
                        }).then(function () {
                            window.location = "dokter"
                        });

                    } else if (result.isDenied) {
                        this.$swal('Changes are not saved', '', 'info')
                        self.isLoading = false;
                        self.getDokter();
                    }
                });
        }
    },
    components: {
        LoadingComponent, ButtonAction
    }
}
</script>

