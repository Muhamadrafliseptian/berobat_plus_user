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
                    <LoadingComponent v-if="isLoading" />
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
                                <InputField Name="nomorHp" v-model="form.nomorHp" />
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
                        <FieldLabel label="Foto">
                            <template #body>
                                <InputField Name="Foto" type="file" v-model="form.foto"
                                    class="form-control file-upload-info" />
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
                                <select class="form-control" v-model="form.jenisKelamin">
                                    <option value="P">Perempuan</option>
                                    <option value="L">Laki Laki</option>
                                </select>
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Tanggal Lahir">
                            <template #body>
                                <VueDatePicker v-model="form.tanggalLahir" Name="tanggalLahir" placeholder="ddmmyy"
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
                                <InputField Name="tempatLahir" Label="Tempat Lahir" v-model="form.tempatLahir" />
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
import ButtonAction from '@/components/ButtonAction.vue';
import VueDatePicker from '@vuepic/vue-datepicker'
import LoadingComponent from '@/components/LoadingComponent.vue';
import iziToast from "izitoast";
import { Form } from 'vee-validate'
import * as yup from 'yup'
import FieldLabel from '@/components/FieldLabel.vue';
export default {
    props: ['id'],
    data() {
        return {
            nomor_str: '',
            kelas: '',
            form: {
                nama: '',
                nomorHp: '',
                email: '',
                jenisKelamin: '',
                tempatLahir: '',
                tanggalLahir: '',
                alamat: ''
            },
            errorClass: 'text-danger',
            dokters: [],
            isSubmit: false,
            previewImage: null,
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
                kelas: yup.string().required('⚠ kolom kelas wajib diisi').max(1, 'harus angka satu').min(0).retur,
                nomorHp: yup.number().typeError('harus nomor').required(' ⚠ kolom nomor hp wajib diisi'),
                tempatLahir: yup.string().required('⚠ kolom tempat lahir wajib diisi'),
                alamat: yup.string().required('⚠  ykolom alamat wajib diisi'),
                nomorStr: yup.number().typeError('⚠ Kolom Nomor STR harus nomor').required('⚠ Kolom Nomor STR wajib diisi')
            })
        },
        idFromParams() {
            return this.$route.params.id
        }
    },
    methods: {
        formatDatePicker(date) {

            const year = date.getFullYear()
            const month = date.getMonth() + 1;
            const day = date.getDate();

            return `${year}/${month}/${day}`
        },
        getDokter() {
            const selfGet = this
            selfGet.isLoading = true
            let type = "getData"
            let url = [
                "akun/dokter/" + this.idFromParams + "/edit", []
            ]
            selfGet.$store.dispatch(type, url).then((result) => {
                selfGet.form = result.data.userId
                selfGet.nomor_str = result.data.nomorStr
                selfGet.kelas = result.data.kelas
                setTimeout(() => {
                    selfGet.isLoading = false
                    selfGet.dokters = result.data
                }, 1000);
            }).catch((err) => {
                console.log(err);
                selfGet.isLoading = false
            });
        },
        handleEditDokter() {
            const self = this
            const data = {
                nomor_str: self.nomor_str,
                kelas: self.kelas,
                nama: self.form.nama,
                email: self.form.email,
                nomorHp: self.form.nomorHp,
                jenisKelamin: self.form.jenisKelamin,
                tempatLahir: self.form.tempatLahir,
                tanggalLahir: self.form.tanggalLahir,
                alamat: self.form.alamat
            }
            let type = "updateDate"
            let url = [
                "akun/dokter", this.idFromParams, data
            ]
            self.$store.dispatch(type, url).then((result) => {
                console.log(result);
                iziToast.success({
                    transitionIn: 'fadeInUp',
                    timeout: 2000,
                    title: "Berhasil",
                    message: "Data berhasil diubah",
                    position: "topCenter",
                }).then(function () {
                    window.location = "/dokter"
                })
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    components: {
        Form,
        InputField,
        ButtonAction,
        FieldLabel,
        VueDatePicker,
        LoadingComponent
    }
}
</script>

<style lang="scss" scoped></style>