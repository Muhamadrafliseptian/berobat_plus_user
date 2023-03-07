<template>
    <div class="col-12 grid-margin">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Edit Dokter</h4>
                <Form @submit="handleEditDokter" class="form-sample" :validation-schema="schema" v-slot="{ errors }">
                    <Input type="hidden" v-model="form.id_dokter" />
                    <p class="card-description text-primary">
                        Data Akun Dokter
                    </p>
                    <div class="row">
                        <FieldLabel label="email">
                            <template #body>
                                <InputField Name="email" v-model="form.email" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.email }}
                                    </small>
                                </span>
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Nomor HP">
                            <template #body>
                                <InputField Name="nomorHp" v-model="form.nomor_hp" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.nomorHp }}
                                    </small>
                                </span>
                            </template>
                        </FieldLabel>
                    </div>
                    <div class="row">
                        <FieldLabel label="Kelas">
                            <template #body>
                                <InputField Name="kelas" Label="Kelas" type="text" v-model="kelas" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.kelas }}
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
                                <InputField Name="namaLengkap" Label="Nama Lengkap" v-model="form.nama" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.namaLengkap }}
                                    </small>
                                </span>
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Nomor STR">
                            <template #body>
                                <InputField Name="nomorStr" Label="Nomor STR" v-model="nomor_str" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.nomorStr }}
                                    </small>
                                </span>
                            </template>
                        </FieldLabel>
                    </div>
                    <div class="row">
                        <FieldLabel label="Jenis Kelamin">
                            <template #body>
                                <SelectOption v-model="form.jenis_kelamin" />
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Tanggal Lahir">
                            <template #body>
                                <VueDatePicker v-model="form.tanggal_lahir" Name="tanggalLahir" placeholder="ddmmyy" :format="formatDatePicker" :max-date="new Date()"/>
                                <small>
                                    <span :class="[errorClass]">{{ errors.tanggalLahir }}</span>
                                </small>
                            </template>
                        </FieldLabel>
                    </div>
                    <div class="row">
                        <FieldLabel label="Tempat Lahir">
                            <template #body>
                                <InputField Name="tempatLahir" Label="Tempat Lahir" v-model="form.tempat_lahir" />
                                <small>
                                    <span :class="[errorClass]">{{ errors.tempatLahir }}</span>
                                </small>
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Alamat">
                            <template #body>
                                <InputField Name="alamat" Label="Alamat" v-model="form.alamat" />
                                <small>
                                    <span :class="[errorClass]">{{ errors.alamat }}</span>
                                </small>
                            </template>
                        </FieldLabel>
                    </div>
                    <div class="text-end">
                        <ButtonAction class="bg-primary w-25 px-4" message="submit" type="submit" />
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue';
import SelectOption from '@/components/SelectOption.vue';
import ButtonAction from '@/components/ButtonAction.vue';
import VueDatePicker from '@vuepic/vue-datepicker'
import { Form } from 'vee-validate'
import * as yup from 'yup'
import FieldLabel from '@/components/FieldLabel.vue';
export default {
    props:['id'],
    data() {
        return {
            nomor_str: '',
            kelas: '',
            form: {
                nama: '',
                nomor_hp: '',
                email: '',
                jenis_kelamin: '',
                tempat_lahir: '',
                tanggal_lahir: '',
                alamat: ''
            },
            errorClass: 'text-danger',
            dokters: [],
            isLoading: false
        }
    },
    mounted() {
        this.getDokter()
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
        idFromParams(){
            return this.$route.params.id
        }
    },
    methods: {
        formatDatePicker(date){

            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear()

            return `${day}/${month}/${year}`
        },
        getDokter(){
            this.isLoading = true
            this.$store.dispatch("getData", ["akun/dokter/"+ this.idFromParams + "/edit" , []]).then((result) => {
                this.form.nama = result.data.userId.nama
                this.form.email = result.data.userId.email
                this.form.nomor_hp = result.data.userId.nomorHp
                this.form.tanggal_lahir = result.data.userId.tanggalLahir
                this.form.tempat_lahir = result.data.userId.tempatLahir
                this.form.alamat = result.data.userId.alamat
                this.nomor_str = result.data.nomorStr
                this.kelas = result.data.kelas
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
        handleEditDokter() {
            console.log("handle submit");
            const self = this
            const data = {
                nomor_str: self.nomor_str,
                kelas: self.kelas,
                nama: self.form.nama,
                email: self.form.email,
                nomor_hp: self.form.nomor_hp,
                jenis_kelamin: self.form.jenis_kelamin,
                tempat_lahir: self.form.tempat_lahir,
                tanggal_lahir: self.form.tanggal_lahir,
                alamat: self.form.alamat
            }
            self.$store.dispatch("updateData", ["akun/dokter" , this.idFromParams, data]).then((result) => {
                console.log(result);
                self.$swal({
                    text: "berhasil mengubah data",
                    icon: "success"
                }).then(function () {
                    window.location = "/dokter"
                })
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    components: {
        SelectOption,
        Form,
        InputField,
        ButtonAction,
        FieldLabel,
        VueDatePicker
    }
}
</script>

<style lang="scss" scoped></style>