<template>
    <div class="d-flex justify-content-start mb-3">
        <button class="btn btn-sm btn-outline-dark shadow me-3" @click="this.$router.back()">
            <i class="fas fa-arrow-left">
            </i>
        </button>
        <h5>
            Dokter Spesialis {{ spesialis.namaSpesialis }}
        </h5>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-3">
        <template class="d-flex justify-content-center" v-if="dokter.length < 1">
            <div class="alert alert-danger w-100">
                <p class="text-center">
                    maaf, dokternya belum ada nihhhh
                </p>
            </div>
        </template>
        <div class="col" v-for="data in dokter">
            <template v-if="data.user.idRole == 'RO-2003062'">
                <template v-if="isLoading">
                    <SkeletonLoading />
                </template>
                <CardDokter v-else :Label="spesialis.namaSpesialis" :nama="'dr ' + data.user.nama"
                    :biaya="data.keahlianId.namaKeahlian"
                    @click="$redirect('/detail/' + data.idDokter + '/' + data.userId.id)" />
            </template>
        </div>
    </div>
</template>
<script>
import SkeletonLoading from '@/components/partials-component/SkeletonLoading.vue';
import CardDokter from '@/components/card/CardDokter.vue'
export default {
    data() {
        return {
            dokter: [],
            spesialis: [],
            isLoading: false
        }
    },
    created() {
        this.getDokter(),
            this.getSpesialis()
    },
    methods: {
        getDokter() {
            const params = this.$route.params.idSpesialis
            let type = "getData"
            let url = [
                `master/spesialis/${params}/get_dokter`, {}
            ]
            this.isLoading = true
            this.$store.dispatch(type, url).then((result) => {
                this.dokter = result.data
                setTimeout(() => {
                    this.isLoading = false
                }, 1000);
            }).catch((err) => {
                console.log(err);
            })
        },
        getSpesialis() {
            const namaSpesialis = this.$route.params.idSpesialis
            let type = "getData"
            let url = [
                `master/penyakit/spesialis_penyakit/${namaSpesialis}/edit`, {}
            ]
            this.$store.dispatch(type, url).then((result) => {
                this.spesialis = result.data
                console.log(result
                );
            }).catch((err) => {
                console.log(err);
            })
        }
    },
    components: {
        CardDokter, SkeletonLoading
    }
}
</script>