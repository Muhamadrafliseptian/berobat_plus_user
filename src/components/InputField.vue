<template>
    <label class="col-sm-3 col-form-label">{{Label}}</label>
    <div class="col-sm-9">
        <Field :name="Name" :type="type" class="form-control" />
    </div>
</template>

<script>
import { Field } from 'vee-validate';
export default {
    components: {
        Field
    },
    props: {
        Label: {
            type: String,
            default: "Username"
        },
        type:{
            type: String,
            default: "text"
        },
        Name: {
            type: String,
            default: "belumDiisi"
        }
    }
}
</script>