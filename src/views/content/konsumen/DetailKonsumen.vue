<template>
    <div class="col-12 grid-margin">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Edit Konsumen</h4>
                <Form class="form-sample">
                    <Input type="hidden" v-model="user.idKonsumen" />
                    <p class="card-description text-primary">
                        Data Akun Konsumen
                    </p>
                    <div class="row">
                        <FieldLabel label="email">
                            <template #body>
                                <InputField Name="email" v-model="user.email" :disabled=isDisabled />
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Nomor HP">
                            <template #body>
                                <InputField Name="nomorHp" v-model="user.nomorHp" :disabled=isDisabled />
                            </template>
                        </FieldLabel>
                    </div>
                    <div class="row">
                        <FieldLabel label="Id Konsumen">
                            <template #body>
                                <InputField Name="idKonsumen" v-model="id_konsumen" :disabled=isDisabled />
                            </template>
                        </FieldLabel>
                        <FieldLabel label="NIK">
                            <template #body>
                                <InputField Name="nik" type="text" v-model="nik" :disabled=isDisabled />
                            </template>
                        </FieldLabel>
                    </div>
                    <p class="card-description text-primary">
                        Data Diri Konsumen
                    </p>
                    <div class="row">
                        <FieldLabel label="Nama">
                            <template #body>
                                <InputField Name="namaLengkap" Label="Nama Lengkap" v-model="user.nama" :disabled=isDisabled />
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Usia">
                            <template #body>
                                <InputField Name="usia" v-model="user.usia" :disabled=isDisabled />
                            </template>
                        </FieldLabel>
                    </div>
                    <div class="row">
                        <FieldLabel label="Jenis Kelamin">
                            <template #body>
                                <select class="form-control" v-model="user.jenisKelamin" :disabled=isDisabled>
                                    <option value="P">Perempuan</option>
                                    <option value="L">Laki Laki</option>
                                </select>
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Tanggal Lahir">
                            <template #body>
                                <VueDatePicker v-model="user.tanggalLahir" Name="tanggalLahir" placeholder="ddmmyy" :disabled=isDisabled :format="formatDatePicker" :max-date="new Date()"/>
                            </template>
                        </FieldLabel>
                    </div>
                    <div class="row">
                        <FieldLabel label="Tempat Lahir">
                            <template #body>
                                <InputField Name="tempatLahir" v-model="user.tempatLahir" :disabled=isDisabled />
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Alamat">
                            <template #body>
                                <InputField Name="alamat" v-model="user.alamat" :disabled=isDisabled />
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
import { Form } from 'vee-validate'
import * as yup from 'yup'
import FieldLabel from '@/components/FieldLabel.vue';
export default {
    props:['id'],
    data() {
        return {
            nik: '',
            user: {
                nama: '',
                nomorHp: '',
                email: '',
                jenisKelamin: '',
                tempatLahir: '',
                tanggalLahir: '',
                alamat: '',
                usia: ''
            },
            errorClass: 'text-danger',
            isLoading: false
        }
    },  
    mounted() {
        this.getKonsumen()
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
        },
        isDisabled(){
            return true;
        }
    },
    methods: {
        formatDatePicker(date){

            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear()

            return `${day}/${month}/${year}`
        },
        getKonsumen(){
            this.isLoading = true
            this.$store.dispatch("getData", ["akun/konsumen/"+ this.idFromParams + "/edit" , []]).then((result) => {
                this.user = result.data.user
                this.nik = result.data.nik
                this.id_konsumen = result.data.idKonsumen
                console.log(result);
                setTimeout(() => {
                    this.isLoading = false
                }, 1000);
            }).catch((err) => {
                console.log(err);
                this.isLoading = false
            });
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