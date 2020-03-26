<template>
    <tr>
        <td>
            <input v-bind:value="qvalue" v-on:input="sendChangeEvent" type="number" class="form-control-sm" style="width: 5em">
        </td>
        <td>
            {{ line.product.name }}
        </td>
        <td class="text-right">
            {{ line.product.price | currency }}
        </td>
        <td class="text-right">
            {{ (line.quantity * line.product.price) | currency }}
        </td>
        <td class="text-center">
            <button v-on:click="sendRemoveEvent" class="btn btn-sm btn-danger">Usuń</button>
        </td>
    </tr>
</template>

<script>
export default {
    props: ["line"],
    data: function() {
        return {
            qvalue: this.line.quantity
        }
    },
    methods: {
        sendChangeEvent($event) {
            if ($event.target.value > 0) {
                this.$emit("quantity", Number($event.target.value));
                this.qvalue = $event.target.value;
            } else {
                this.$emit("quantity", 1);
                this.qvalue = 1;
                $event.target.value = this.qvalue;
            }
        },
        sendRemoveEvent() {
            this.$emit("remove", this.line);
        }
    }
}
</script>