<template>
    <div class="float-right">
        <small>
            Twój koszyk:
            <span v-if="itemCount > 0">
                {{ itemCount }} produkt(y) {{ totalPrice | currency }}
            </span>
            <span v-else>
                (pusty)
            </span>
        </small>
        <router-link to="/cart" v-bind:disabled="itemCount == 0" class="btn btn-sm bg-dark text-white">
            <i class="fa fa-shopping-cart"></i>
        </router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            itemCount: "cart/itemCount",
            totalPrice: "cart/totalPrice"
        })
    }
}
</script>