<template>
    <div class="col-12 grid-margin">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Tambah Dokter</h4>
                <Form @submit="handleSubmitDokter" class="form-sample" :validation-schema="schema" v-slot="{ errors }">
                    <p class="card-description">
                        Data Diri Dokter
                    </p>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField Name="namaLengkap" Label="Nama Lengkap" />
                                <span :class="[errorClass]">
                                    <small>
                                        {{ errors.namaLengkap }}
                                    </small>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField Name="email" type="email" Label="Email" />
                                <small>
                                    <span :class="[errorClass]">{{ errors.email }}</span>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <SelectOption />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField type="date" Label="Tanggal Lahir" Name="tanggalLahir"
                                    placeholder="dd/mm/yyyy" />
                                <small>
                                    <span :class="[errorClass]">{{ errors.tanggalLahir }}</span>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField Name="tempatLahir" Label="Tempat Lahir" />
                                <small>
                                    <span :class="[errorClass]">{{ errors.tempatLahir }}</span>
                                </small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <InputField Name="nomorHp" Label="Nomor HP" />
                                <small>
                                    <span :class="[errorClass]">{{ errors.nomorHp }}</span>
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
            errorClass: 'text-danger'
        }
    },
    computed: {
        schema() {
            return yup.object({
                namaLengkap: yup.string().required('kolom nama lengkap wajib diisi'),
                email: yup.string().required('kolom email wajib diisi').email('email harus valid'),
                nomorHp: yup.string().required('kolom nomor hp wajib diisi').min(12).max(13),
                tempatLahir: yup.string().required('kolom tempat lahir wajib diisi'),
            })
        }
    },
    methods: {
        handleSubmitDokter() { }
    },
    components: {
        SelectOption, Form, InputField, ButtonAction,
    }
}
</script>

<style lang="scss" scoped></style>