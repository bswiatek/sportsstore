<template>
    <div v-if="showSearch" class="row my-2">
        <label class="col-2 col-form-label text-right">Szukaj:</label>
        <input type="text" v-bind:value="searchTerm" v-on:input="doSearch" placeholder="Czego szukasz?" class="col form-control" />
        <button v-on:click="handleClose" class="col-1 btn btn-sm btn-secondary mx-4">Zamknij</button>
    </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
    computed: {
        ...mapState(["showSearch", "searchTerm"])
    },
    methods: {
        ...mapMutations(["setShowSearch"]),
        ...mapActions(["clearSearchTerm", "search"]),
        handleClose() {
            this.clearSearchTerm();
            this.setShowSearch(false);
        },
        doSearch($event) {
            this.search($event.target.value);
        }
    }
}
</script>