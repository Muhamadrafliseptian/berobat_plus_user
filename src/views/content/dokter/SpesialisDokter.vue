<template>
    <div class="text-start ms-2">
        <p class="fs-4 mb-0"><b>Rekomendasi Dokter</b></p>
        <p>Konsultasikan keluhanmu dengan dokter kami
        </p>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-3">
        <div class="col" v-for="data in limitData.dokters" :key="data.id">
            <template v-if="data.userId.status == 1">
                <template v-if="isLoading">
                    <SkeletonLoading />
                </template>
                <CardDokter v-else Image="../../../assets/images/avadoktercowo.png" Label="Dokter Umum"
                    :nama="'dr ' + data.userId.nama" :biaya="data.biaya.biaya"
                    @click="$redirect('/detail/' + data.idDokter + '/' + data.userId.id)" />
            </template>
        </div>
    </div>
    <div class="text-start ms-2 pt-4">
        <p class="fs-4 mb-0"><b>Cari Dokter Spesialis</b></p>
        <p>Mau langsung sembuh? yuk cari spesialis yang diinginkan
        </p>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 text-center">
        <div class="col-6 col-md-3 col-lg-2" v-for="data in limitData.specialist" :key="data.id">
            <template v-if="isLoading">
                <LoadingComponent />
            </template>
            <div class="d-flex flex-column align-items-center"
               v-else @click="$redirect('spesialis/' + data.idSpesialisPenyakit + '/dokter')">
                <i :class="data.icon + ' p-3 rounded-circle fs-2 text-light'" style="background-color: #46458C"></i>
                <p>{{ data.namaSpesialis }}</p>
            </div>
        </div>
    </div>
    <div class="text-start ms-2 ">
        <p class="fs-4 mb-0"><b>Rekomendasi Perawat</b></p>
        <p>Butuh perawatan? tenang, ada perawat-perawat terbaik
        </p>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-3">
        <div class="col" v-for="data in limitData.nurses">
            <template v-if="isLoading">
                <SkeletonLoading />
            </template>
            <CardDokter v-else :nama="data.user.nama + ', S.Kep.'" biaya="20.000" Label="Perawat"
                @click="$redirect('/chat-dokter/perawat/' + data.idPerawat + '/' + data.user.id)" />
        </div>
    </div>
</template>
<script>
import CardDokter from '../../../components/card/CardDokter.vue';
import LoadingComponent from '../../../components/partials-component/LoadingComponent.vue';
import HeaderComponent from '@/components/layouts/HeaderComponent.vue';
import FooterComponent from '@/components/layouts/FooterComponent.vue';
import SkeletonLoading from '@/components/partials-component/SkeletonLoading.vue';
import BodyDetailDokter from '@/components/BodyDetailDokter.vue';
import ButtonComponent from '@/components/partials-component/ButtonComponent.vue'
export default {
    data() {
        return {
            dokters: [],
            specialist: [],
            keahlian: [],
            nurses: [],
            dokterLimit: 2,
            specialistLimit: 12,
            isLoading: false,
            idAhkii: []
        }
    },
    mounted() {
        this.getPerawat(),
            this.getDokter()
    },
    created() {
        this.getSpesialis()
    },
    computed: {
        limitData() {
            return {
                dokters: this.dokters.slice(0, this.dokterLimit),
                specialist: this.specialist.slice(0, this.specialistLimit),
                nurses: this.nurses.slice(0, this.dokterLimit)
            }
        },
        filteredDokter() {
            const dokterUmum = this.dokters.filter((d) => d.getKeahlian.namaKeahlian === 'Dokter Umum');
            return dokterUmum.sort((a, b) => a.getDokter.nama.localeCompare(b.getDokter.nama));
        },
        idAhli() {
            return {
                idAhkii: this.dokters[0].userId
            }
        }
    },
    components: {
        HeaderComponent,
        FooterComponent,
        SkeletonLoading,
        BodyDetailDokter,
        LoadingComponent,
        ButtonComponent,
        CardDokter
    },
    methods: {
        getDokter() {
            let type = "getData"
            let url = [
                "akun/dokter/data", {}
            ]
            this.isLoading = true
            this.$store.dispatch(type, url).then((result) => {
                this.dokters = result.data
                    this.isLoading = false
            }).catch((err) => {
                console.log(err);
            })
        },
        getSpesialis() {
            let type = "getData"
            let url = [
                "master/penyakit/spesialis_penyakit", {}
            ]
            this.isLoading = true
            this.$store.dispatch(type, url).then((result) => {
                this.specialist = result.data
                this.isLoading = false
            }).catch((err) => {
                console.log(err);
            })
        },
        getPerawat() {
            this.isLoading = true
            let type = "getData"
            let url = [
                "akun/perawat", {}
            ]
            this.$store.dispatch(type, url).then((result) => {
                this.nurses = result.data
                    this.isLoading = false;
            }).catch((err) => {
                console.log(err);
            })
        },
        onPageChange(page) {
            this.pagination.page = page;
            this.getPerawat();
        }
    },
}
</script>