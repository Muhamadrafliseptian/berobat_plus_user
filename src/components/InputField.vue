<template>
    <label class="col-sm-3 col-form-label">{{Label}}</label>
    <div class="col-sm-9">
        <input :type="text" class="form-control" />
    </div>
</template>

<script>
export default {
    props: {
        Label: {
            type: String,
            default: "Username"
        },
        type:{
            type: String,
            default: "text"
        }
    }
}
</script>