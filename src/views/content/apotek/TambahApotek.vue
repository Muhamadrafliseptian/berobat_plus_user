<template>
    <div class="col-12 grid-margin">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Tambah Apotek</h4>
                <Form @submit="handleSubmitApotek" class="form-sample" :validation-schema="schema" v-slot="{ errors }">
                    <Input type="hidden" v-model="form.id_owner" />
                    <p class="card-description text-primary">
                        Data Akun Apotek
                    </p>
                    <div class="row">
                        <FieldLabel label="Nama">
                            <template #body>
                                <InputField Name="nama" v-model="form.nama" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.nama }}
                                    </small>
                                </span>
                            </template>
                        </FieldLabel>
                        <FieldLabel label="Email">
                            <template #body>
                                <InputField Name="email" v-model="form.email" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.email }}
                                    </small>
                                </span>
                            </template>
                        </FieldLabel>
                    </div>
                    <div class="row">
                        <FieldLabel label="Alamat">
                            <template #body>
                                <InputField Name="alamat" v-model="form.alamat" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.alamat }}
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
                    <div class="text-end">
                        <ButtonAction class="bg-primary w-25 px-4" message="submit" type="submit"  @click="handleSubmitApotek"/>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue';
import ButtonAction from '@/components/ButtonAction.vue';
import { Form } from 'vee-validate'
import * as yup from 'yup'
import FieldLabel from '@/components/FieldLabel.vue';
export default {
    data() {
        return {
            form: {
                nama: '',
                nomor_hp: '',
                email: '',
                alamat: ''
            },
            errorClass: 'text-danger'
        }
    },
    computed: {
        schema() {
            return yup.object({
                namaLengkap: yup.string().required(' ⚠ kolom nama lengkap wajib diisi'),
                email: yup.string().required('⚠ kolom email wajib diisi').email('⚠ email harus valid'),
                nomorHp: yup.number().typeError('harus nomor').required(' ⚠ kolom nomor hp wajib diisi'),
                alamat: yup.string().required('⚠  ykolom alamat wajib diisi'),
            })
        }
    },
    methods: {
        handleSubmitApotek() {
            console.log("halo");
            const self = this
            const data = {
                nama: self.form.nama,
                email: self.form.email,
                nomor_hp: self.form.nomor_hp,
                alamat: self.form.alamat
            }
            self.$store.dispatch("postData", ["akun/apotek", data]).then((response) => {
                console.log(response);
                self.$swal({
                    text: "berhasil menambahkan data",
                    icon: "success"
                }).then(function () {
                    window.location = "/apotek"
                })
            }).catch(error => {
                console.log(error);
            })
        }
    },
    components: {
        Form,
        InputField,
        ButtonAction,
        FieldLabel,
    }
}
</script>