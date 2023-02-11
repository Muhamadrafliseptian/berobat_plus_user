<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
                <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each
                    required form group has a validation state that can be triggered by attempting to submit the form
                    without completing it.</p>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
                <form class="p-4 p-md-5 border rounded-3 bg-light">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"> Remember me
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                    <hr class="my-4">
                    <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";
import iziToast from "izitoast"
export default {
    data() {
        return {
            users: {
                nomor_hp: '',
                password: '',
                error: [],
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$store.dispatch("postDataUsers", ["autentikasi/login", this.users]).then((response) => {
                Cookies.set("token", response.token);
                Cookies.set("user", JSON.stringify(response));
                iziToast.success({
                    title: "Berhasil Login",
                    message: "Masuk dashboard",
                    position: "topCenter",
                    timeOut: 2000,
                    onOpened: () => {
                        window.location.replace('/')
                    }
                })
            }).catch(() => {
                iziToast.error({
                    title: "Galat",
                    message: "Periksa kembali email dan password",
                    position: "topCenter"
                })
            });
        }
    },
}
</script>