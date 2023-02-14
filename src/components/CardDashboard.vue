<template>
    <div>
        <div>
            <p class="statistics-title">{{text}}</p>
            <h3 class="rate-percentage text-center">{{jumlah}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: "jumlah"
            },
            jumlah: {
                type: String,
                default: "Data ga ada"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>