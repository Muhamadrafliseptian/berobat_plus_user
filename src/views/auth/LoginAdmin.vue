<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5 ">
        <div class="row align-items-center g-lg-5 py-5">
            <div class="col-md-10 mx-auto col-lg-5">
                <h3 class="text-center py-3"><b>Login Page</b></h3>
                <form @submit.prevent="handleSubmit" class="p-4 p-md-5 border rounded-3 bg-light">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control"  required v-model="users.nomor_hp" id="floatingInput"
                            placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" required v-model="users.password" id="floatingPassword"
                            placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"> Remember me
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
                    <hr class="my-4">
                    <FormulateInput type="text" label="What ice cream flavor?"
                        help="Note: We're fresh out of strawberries and bananas." name="flavor"
                        validation="required|not:strawberry,banana" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";
// import iziToast from "izitoast"
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
            this.$store.dispatch("postData", ["autentikasi/login", this.users]).then((response) => {
                console.log(response);
                Cookies.set("token", response.token);
                Cookies.set("user", JSON.stringify(response));
                this.$swal({
                    icon: "success",
                    text: "Berhasil Login",
                }).then(function () {
                    window.location = "/"
                });
            }).catch((error) => {
                console.log(error);
            });
        },
    },
}
</script>