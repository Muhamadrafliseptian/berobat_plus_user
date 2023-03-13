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
                                <th>
                                    Status
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
                                <td>
                                    <label class="switch">
                                        <input type="checkbox" :checked="dokter.userId.status == 1">
                                        <span class="slider round" @click="updateStatus(dokter.userId.id)"></span>
                                    </label>
                                </td>
                                <td class="text-center">
                                    <router-link :to="'/dokter/' + dokter.idDokter + '/edit'">
                                        <ButtonAction class="btn-warning " message="edit" />
                                    </router-link>
                                    <ButtonAction class="btn-danger " @click="deleteDokter(dokter.idDokter)"
                                        message="delete" />
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
import ButtonAction from '@/components/ButtonAction.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import iziToast from 'izitoast';
export default {
    data() {
        return {
            dokters: [],
            isLoading: false,
            isActive: false,
            fullPage: true,
            status: 0
        }
    },
    created() {
        this.getDokter()
    },
    computed: {
    },
    methods: {
        getDokter() {
            const selfGet = this
            selfGet.isLoading = true
            const params = [].join("&")
            var type = "getData"
            var url = [
                "akun/dokter", {}
            ]
            selfGet.$store.dispatch(type, url, params).then((result) => {
                console.log(result);
                setTimeout(() => {
                    selfGet.isLoading = false
                    selfGet.fullPage = false
                    selfGet.dokters = result.data
                }, 1000);
            }).catch((err) => {
                console.log(err);
                selfGet.isLoading = false
            });
        },
        updateStatus(id_user) {
            const selfEdit = this
            var type = "updateData";
            var url = [
                "akun/active_account", id_user, {
                }
            ]
            selfEdit.isLoading = true;
            selfEdit.$store.dispatch(type, url).then((response) => {
                console.log(response);
                selfEdit.isLoading = false;
            })
        },
        deleteDokter(idDokter) {
            const selfDestroy = this
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
                        selfDestroy.$store.dispatch("deleteData", ["akun/dokter", idDokter])
                        iziToast.success({
                            timeout: 2000,
                            title: "Berhasil",
                            message: "Data berhasil ditambah",
                            position: "topCenter",
                        }).then(function () {
                            window.location = "dokter"
                        });
                    } else if (result.isDenied) {
                        this.$swal('Changes are not saved', '', 'info')
                        selfDestroy.isLoading = false;
                        selfDestroy.getDokter();
                    }
                });
        }
    },
    components: {
        LoadingComponent, ButtonAction
    }
}
</script>
<style>
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 54px;
    height: 26px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #2196F3;
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>