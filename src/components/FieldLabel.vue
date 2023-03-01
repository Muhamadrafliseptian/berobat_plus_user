<template >
    <div class="col-md-6">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">{{ label }}</label>
            <div class="col-sm-9">
                <slot name="body"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: "Label"
        }
    }
}
</script>
<style ></style>