<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-dark text-white">
                <a href="#" class="navbar-brand">SKLEP SPORTOWY</a>
                <cart-summary />
            </div>
        </div>
        <div class="row">
            <div class="col-3 bg-info p-2">
                <CategoryControls />
                <button v-on:click="setShowSearch(true)" class="btn btn-block btn-warning mt-5">Szukaj</button>
            </div>
            <div class="col-9 p-2">
                <Search />
                <product-list />
            </div>
        </div>
    </div>
</template>

<script>
import ProductList from "./ProductList";
import CategoryControls from "./CategoryControls";
import CartSummary from "./CartSummary";
import Search from "./Search";
import { mapMutations } from "vuex";
export default {
    components: { ProductList, CategoryControls, CartSummary, Search },
    methods: {
        ...mapMutations(["setShowSearch"])
    }
}
</script>