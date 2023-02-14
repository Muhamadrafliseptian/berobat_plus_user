<template>
        <div class="alert alert-danger" role="alert">
            <h5>{{message}}</h5>
        </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            default: "Mohon Maaf Data Belum Tersedia"
        }
    }
}
</script>

<style scoped>

</style>