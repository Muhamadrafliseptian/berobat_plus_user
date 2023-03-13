<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5 ">
        <div class="row align-items-center g-lg-5 py-5">
            <div class="col-md-10 mx-auto col-lg-5">
                <h3 class="text-center py-3"><b>Login Page</b></h3>
                <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }"
                    class="p-4 p-md-5 border rounded-3 bg-light">
                    <div class="form-floating mb-3">
                        <Field name="name" type="text" class="form-control" v-model="users.nomor_hp" id="floatingField"
                            placeholder="name@example.com" />
                        <label for="floatingField">Nomor hp</label>
                        <span class="text-danger">{{ errors.name }}</span>
                    </div>
                    <div class="form-group">

                        <div class="form-floating mb-3">
                            <Field name="password" :type="
                                showPassword ? 'text' : 'password'
                            " class="form-control" v-model="users.password" id="floatingPassword"
                                placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                            <span class="text-danger">{{ errors.password }}</span>
                            <div class="input-group-append text-end">
                                <span @click="hidePassword" class="text-primary">
                                    <i :class="
                                        showPassword
                                            ? 'fa-solid fa-eye-low-vision fa-md'
                                            : 'fa-solid fa-eye fa-md'
                                    "></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="checkbox mb-3">
                        <label>
                            <Field name="checkbox" type="checkbox" value="remember-me"> Remember me
                            </Field>
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">
                        <span v-if="isLoading"><i>sebentar, kami sedang memproses data kamu</i></span>
                        <span v-else>
                            Login
                        </span>
                    </button>
                    <hr class="my-4">
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
import iziToast from 'izitoast'
import Cookies from "js-cookie";
import * as yup from 'yup'
import { Field, Form } from 'vee-validate'
// import iziToast from "izitoast"
export default {
    data() {
        const schema = yup.object({
            name: yup.string().required('nomor hp wajib diisi').max(13, 'nomor hp maksimal 13 angka').min(12, 'nomor hp minimal 12 angka'),
            password: yup.string().min(8, 'password minimal 8 karakter').max(20, 'password maksimal 20 karakter').required('😋 password wajib diisi')
        })
        return {
            schema,
            users: {
                nomor_hp: '',
                password: '',
            },
            error: [],
            showPassword: false,
            isLoading: false
        }
    },
    components: {
        Field,
        Form,
    },
    computed: {},
    methods: {
        hidePassword() {
            this.showPassword = !this.showPassword
        },
        handleSubmit() {
            this.isLoading = true
            this.$store.dispatch("postData", ["autentikasi/login", this.users]).then((response) => {
                Cookies.set("token", response.token);
                Cookies.set("user", JSON.stringify(response));
                setTimeout(() => {
                    iziToast.success({
                        transitionIn: 'fadeInUp',
                        timeout: 2000,
                        title: "Berhasil",
                        message: "Berhasil Login",
                        position: "topCenter",
                    }).then(function () {
                        window.location = "/"
                    })
                }, 2000);
            }).catch((err) => {
                console.log(err);
                this.isLoading = false
                this.$swal({
                    text: "Periksa Kembali Form Isian Anda",
                    icon: "error"
                }).then(function () {
                    window.location = "/login"
                })
            })
        },
    },
}
</script>