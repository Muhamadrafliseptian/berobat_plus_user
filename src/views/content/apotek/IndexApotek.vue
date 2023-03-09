<template>
    <div class="row pb-3">
        <div class="col-6 text-start">
            <h4 class="card-title">
                Data Apotek
            </h4>
        </div>
        <div class="col-6 text-end">
            <router-link to="/apotek/create"><ButtonAction class="btn-primary" message="Tambah Data"/></router-link>
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
                                    Nomor Telepon
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
                            <tr v-for="apotek in apoteks" :key="apotek.id">
                                <td class="py-1">
                                    <img :src="'./assets/images/faces/face1.jpg'" alt="image" />
                                </td>
                                <td>
                                    {{ apotek.getUser.nama }}
                                </td>
                                <td>
                                    {{ apotek.getUser.alamat }}
                                </td>
                                <td>
                                    {{ apotek.getUser.alamat }}
                                </td>
                                <td>
                                    <label class="switch">
                                        <input type="checkbox">
                                        <span class="slider round"></span>
                                    </label>
                                </td>
                                <td class="text-center">
                                    <ButtonAction class="btn btn-danger" @click="deleteApotek(apotek.idOwner)" message="Delete" />
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
import ButtonAction from '@/components/ButtonAction.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
export default {
    data() {
        return {
            apoteks: [],
            isLoading: false
        }
    },
    created() {
        this.getApotek()
    },
    methods: {
        getApotek() {
            this.isLoading = true
            const params = [].join("&")
            this.$store.dispatch("getData", ["akun/apotek", params]).then((result) => {
                console.log(result.data);
                setTimeout(() => {
                    this.isLoading = false
                    this.apoteks = result.data
                }, 1000);
            }).catch((err) => {
                console.log(err);
                this.isLoading = false
            });
        },
        deleteApotek(idOwner){
            const selfDelete = this
            selfDelete.$swal({
                icon: 'question',
                title: "Apakah kamu ingin menyimpan perubahan",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Ya, Hapus",
                denyButtonText: "Jangan Hapus"
            }).then((result)=>{
                if (result.isConfirmed){
                    selfDelete.$store.dispatch("deleteData", ["akun/apotek", idOwner])
                    selfDelete.$swal({
                        icon: "success",
                        text: "Data Anda Berhasil Dihapus",
                    }).then(function(){
                        window.location = "apotek"
                    })
                }else if (result.isDenied){
                    selfDelete.$swal ("Perubahan tidak tersimpan", '', 'info')
                    selfDelete.isLoading = true
                    selfDelete.getApotek()
                }
            })
        }
    },
    components: {
        LoadingComponent, ButtonAction
    }
}
</script>

<style>
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