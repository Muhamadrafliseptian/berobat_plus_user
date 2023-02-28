<template>
    <div class="col-12 grid-margin">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Tambah Dokter</h4>
                <Form @submit="handleSubmitDokter" class="form-sample" :validation-schema="schema" v-slot="{ errors }">
                    <Input type="hidden" v-model="users.id_dokter"/>
                    <p class="card-description text-primary">
                        Data Akun Dokter
                    </p>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField Name="email" Label="Email" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.email }}
                                    </small>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField Name="nomorHp" Label="Nomor HP" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.nomorHp }}
                                    </small>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField Name="password" v-validate="'required'" Label="Password" type="password" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.password }}
                                    </small>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField Name="kelas" Label="Kelas" type="text" v-model="users.kelas" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.kelas }}
                                    </small>
                                </span>
                            </div>
                        </div>
                    </div>
                    <p class="card-description text-primary">
                        Data Diri Dokter
                    </p>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField Name="namaLengkap" Label="Nama Lengkap" v-model="users.nama_lengkap" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.namaLengkap }}
                                    </small>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField Name="nomorStr" Label="Nomor STR" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.nomorStr }}
                                    </small>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <SelectOption v-model="users.jenis_kelamin" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField type="date" Label="Tanggal Lahir" Name="tanggalLahir" placeholder="dd/mm/yyyy"
                                    v-model="users.tanggal_lahir" />
                                <small>
                                    <span :class="[errorClass]">{{ errors.tanggalLahir }}</span>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField Name="tempatLahir" Label="Tempat Lahir" v-model="users.tempat_lahir" />
                                <small>
                                    <span :class="[errorClass]">{{ errors.tempatLahir }}</span>
                                </small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField Name="alamat" Label="Alamat" v-model="users.alamat" />
                                <small>
                                    <span :class="[errorClass]">{{ errors.alamat }}</span>
                                </small>
                            </div>
                        </div>
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
import { Form } from 'vee-validate'
import * as yup from 'yup'
export default {
    data() {
        return {
            nomor_str: '',
            kelas: '',
            user_id: [],
            errorClass: 'text-danger'
        }
    },
    computed: {
        schema() {
            return yup.object({
                namaLengkap: yup.string().required(' ⚠ kolom nama lengkap wajib diisi'),
                email: yup.string().required('⚠ kolom email wajib diisi').email('⚠ email harus valid'),
                nomorHp: yup.number().typeError('harus nomor').required(' ⚠ kolom nomor hp wajib diisi'),
                tempatLahir: yup.string().required('⚠ kolom tempat lahir wajib diisi'),
                alamat: yup.string().required('⚠  kolom alamat wajib diisi'),
                nomorStr: yup.number().typeError('⚠ Kolom Nomor STR harus nomor').required('⚠ Kolom Nomor STR wajib diisi')
            })
        }
    },
    methods: {
        handleSubmitDokter() {
            const self = this
            self.$store.dispatch("postData", ["akun/dokter", this.users]).then((response)=>{
                console.log(response);
                self.$swal({
                    text:"berhasil menambahkan data",
                    icon: "success"
                }).then(function(){
                window.location = "/dokter"
            })
            }).catch(error=>{
                console.log(error);
            })
        }
    },
    components: {
        SelectOption, Form, InputField, ButtonAction,
    }
}
</script>

<style lang="scss" scoped></style>