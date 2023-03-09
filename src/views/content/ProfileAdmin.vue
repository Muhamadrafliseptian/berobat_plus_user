<template>
    <div class="col-12 grid-margin">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Profil Admin</h4>
                <Form class="form-sample" :validation-schema="schema" v-slot="{ errors }">
                    {{ user }}
                    <Input type="hidden" v-model="user.id" />
                    <p class="card-description text-primary">
                        Data Akun Dokter
                    </p>
                    <div class="row">
                        <FieldLabel label="email">
                            <template #body>
                                <InputField Name="email" v-model="user.email" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.email }}
                                    </small>
                                </span>
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Nomor HP">
                            <template #body>
                                <InputField Name="nomorHp" v-model="user.nomor_hp" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.nomorHp }}
                                    </small>
                                </span>
                            </template>
                        </FieldLabel>
                    </div>
                    <div class="row">
                        <FieldLabel label="Berat Badan">
                            <template #body>
                                <InputField Name="beratBadan" type="text" v-model="user.berat_badan" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.beratBadan }}
                                    </small>
                                </span>
                            </template>
                        </FieldLabel>
                    </div>
                    <p class="card-description text-primary">
                        Data Diri Dokter
                    </p>
                    <div class="row">
                        <FieldLabel label="Nama">
                            <template #body>
                                <InputField Name="namaLengkap" Label="Nama Lengkap" v-model="user.nama" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.namaLengkap }}
                                    </small>
                                </span>
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Tinggi Badan">
                            <template #body>
                                <InputField Name="tinggiBadan" Label="Nomor STR" v-model="user.tinggi_badan" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.tinggiBadan }}
                                    </small>
                                </span>
                            </template>
                        </FieldLabel>
                    </div>
                    <div class="row">
                        <FieldLabel label="Jenis Kelamin">
                            <template #body>
                                <select class="form-control" v-model="user.jenis_kelamin">
                                    <option value="P">Perempuan</option>
                                    <option value="L">Laki Laki</option>
                                </select>
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Tanggal Lahir">
                            <template #body>
                                <VueDatePicker v-model="user.tanggal_lahir" Name="tanggalLahir" placeholder="ddmmyy"
                                    :format="formatDatePicker" :max-date="new Date()" />
                                <small>
                                    <span :class="[errorClass]">{{ errors.tanggalLahir }}</span>
                                </small>
                            </template>
                        </FieldLabel>
                    </div>
                    <div class="row">
                        <FieldLabel label="Tempat Lahir">
                            <template #body>
                                <InputField Name="tempatLahir" Label="Tempat Lahir" v-model="user.tempat_lahir" />
                                <small>
                                    <span :class="[errorClass]">{{ errors.tempatLahir }}</span>
                                </small>
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Alamat">
                            <template #body>
                                <InputField Name="alamat" Label="Alamat" v-model="user.alamat" />
                                <small>
                                    <span :class="[errorClass]">{{ errors.alamat }}</span>
                                </small>
                            </template>
                        </FieldLabel>
                    </div>
                    <div class="text-end">
                        <ButtonAction class="bg-primary w-25 px-4" message="submit" type="submit" @click="editAdmin()"/>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue';
import ButtonAction from '@/components/ButtonAction.vue';
import VueDatePicker from '@vuepic/vue-datepicker'
import { Form } from 'vee-validate'
import * as yup from 'yup'
import FieldLabel from '@/components/FieldLabel.vue';
export default {
    data() {
        return {
            user: {
                id: '',
                nama: '',
                email: '',
                nomor_hp: '',
                alamat: '',
                jenis_kelamin: '',
                foto: '',
                usia: '',
                berat_badan: '',
                tinggi_badan: '',
                tempat_lahir: '',
                tanggal_lahir: '',
            },
            errorClass: 'text-danger',
            isLoading: false
        }
    },
    mounted() {
        this.getAdmin()
    },
    computed: {
        schema() {
            return yup.object({
                namaLengkap: yup.string().required(' ⚠ kolom nama lengkap wajib diisi'),
                email: yup.string().required('⚠ kolom email wajib diisi').email('⚠ email harus valid'),
                nomorHp: yup.number().typeError('harus nomor').required(' ⚠ kolom nomor hp wajib diisi'),
                tempatLahir: yup.string().required('⚠ kolom tempat lahir wajib diisi'),
                alamat: yup.string().required('⚠  ykolom alamat wajib diisi'),
                nomorStr: yup.number().typeError('⚠ Kolom Nomor STR harus nomor').required('⚠ Kolom Nomor STR wajib diisi')
            })
        },

    },
    methods: {
        formatDatePicker(date) {

            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear()

            return `${year}/${month}/${day}`
        },
        getAdmin() {
            const params = [].join("&")
            this.$store.dispatch("getData", ["akun/profil/admin/profil", params]).then((result) => {
                this.user.id = result.data.id
                this.user.nama = result.data.nama
                this.user.email = result.data.email
                this.user.nomor_hp = result.data.nomorHp
                this.user.tanggal_lahir = result.data.tanggalLahir
                this.user.tempat_lahir = result.data.tempatLahir
                this.user.alamat = result.data.alamat
                this.user.tinggi_badan = result.data.tinggiBadan
                this.user.jenis_kelamin = result.data.jenisKelamin
                this.user.berat_badan = result.data.beratBadan
                console.log(result);
            }).catch((error) => {
                console.log(error);
            })
        },
        editAdmin() {
            console.log("test");
            let type = "updateData"
            const self = this
            const data = {
                nama: self.user.nama,
                email: self.user.email,
                nomor_hp: self.user.nomor_hp,
                tanggal_lahir: self.user.tanggal_lahir,
                tempat_lahir: self.user.tempat_lahir,
                alamat: self.user.alamat,
                tinggi_badan: self.user.tinggi_badan,
                jenis_kelamin: self.user.jenis_kelamin,
                berat_badan: self.user.berat_badan
            }
            let url = [
                "akun/profil/admin/profil", '', data
            ]
            self.$store.dispatch(type, url).then((result) => {
                console.log(result);
                self.$swal({
                    text: "berhasil mengubah data",
                    icon: "success"
                }).then(function () {
                    window.location = "/update_profile"
                })
            }).catch((error) => {
                console.log(error);
            })
        },
    },
    components: {
        Form,
        InputField,
        ButtonAction,
        FieldLabel,
        VueDatePicker
    }
}
</script>

<style lang="scss" scoped></style>