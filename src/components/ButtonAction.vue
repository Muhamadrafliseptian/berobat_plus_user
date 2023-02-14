<template>
    <button class="btn btn-sm text-light rounded-pill me-2">{{ message }}</button>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            default: "Aksi"
        },
    }
}
</script>

<style lang="scss" scoped>

</style>