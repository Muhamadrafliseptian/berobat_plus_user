<template>
    <div>
        <div>
            <p class="statistics-title">{{para}}</p>
            <h3 class="rate-percentage text-center">{{hira}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            para: {
                type: String,
                default: "jumlah"
            },
            hira: {
                type: String,
                default: "Data ga ada"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>