<template>
    <Form class="form-sample">
        <div class="card">
            <div class="card-body">
                <p class="card-description text-primary">
                    Data Owner Apotek
                </p>
                <div class="row">
                    <FieldLabel label="Foto Profil">
                        <template #body>
                            <InputField type="file"/>
                        </template>
                    </FieldLabel>
                    <FieldLabel label="Nama">
                        <template #body>
                            <InputField Name="nama" v-model="form.nama" />
                        </template>
                    </FieldLabel>
                    <FieldLabel label="Email">
                        <template #body>
                            <InputField Name="email" v-model="form.email" />
                        </template>
                    </FieldLabel>
                    <FieldLabel label="Nomor HP">
                        <template #body>
                            <InputField Name="nomorHp" v-model="form.nomorHp" />
                        </template>
                    </FieldLabel>
                    <FieldLabel label="Alamat">
                        <template #body>
                            <InputField Name="alamat" v-model="form.alamat" />
                        </template>
                    </FieldLabel>
                    <FieldLabel label="Tempat Lahir">
                        <template #body>
                            <InputField Name="tempatLahir" v-model="form.tempatLahir" />
                        </template>
                    </FieldLabel>
                    <FieldLabel label="Tanggal Lahir">
                        <template #body>
                            <InputField Name="tanggalLahir" v-model="form.tanggalLahir" />
                        </template>
                    </FieldLabel>
                </div>
                <div class="text-end">
                    <ButtonAction class="btn btn-primary" type="button" message="Submit" @click="handleEditApotek" />
                </div>
            </div>
        </div>
    </Form>
</template>

<script>
import FieldLabel from '@/components/FieldLabel.vue';
import InputField from '@/components/InputField.vue';
import ButtonAction from '@/components/ButtonAction.vue';
export default {
    data() {
        return {
            form: {
                nama: '',
                email: '',
                nomorHp: '',
                alamat: ''
            },
            error: []
        }
    },
    mounted() {
        this.getOwnerApotek()
    },
    computed: {
        idFromParams() {
            return this.$route.params.id
        }
    },
    methods: {
        getOwnerApotek() {
            const selfGet = this
            let type = "getData"
            let url = [
                "akun/apotek/" + selfGet.idFromParams + "/edit",
                []
            ]
            selfGet.$store.dispatch(type, url).then((result) => {
                selfGet.form = result.data.getUser
                console.log(result);
            }).catch((err) => {
                console.log(err);
            })
        },
        handleEditApotek() {
            const selfEdit = this
            const data = {
                nama: selfEdit.form.nama,
                email: selfEdit.form.email,
                alamat: selfEdit.form.alamat,
                nomorHp: selfEdit.form.nomorHp
            }
            let type = "updateData"
            let url = [
                "akun/apotek", selfEdit.idFromParams, data
            ]
            selfEdit.$store.dispatch(type, url).then((result) => {
                console.log(result);
                selfEdit.$swal({
                    text: "berhasil mengubah data",
                    icon: "success"
                }).then(function () {
                    window.location = "/apotek"
                })
            }).catch((err) => {
                console.log(err);
            })
        }
    },
    components: {
        FieldLabel, InputField, ButtonAction
    },
}
</script>