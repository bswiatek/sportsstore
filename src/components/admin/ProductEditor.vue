<template>
    <div>
        <h4 class="text-center text-white p-2" v-bind:class="themeClass">{{ editMode ? "Edytuj" : "Utwórz produkt" }}</h4>
        <h4 v-if="$v.$invalid && $v.$dirty" class="bg-danger text-white text-center p-2">Należy podać wartości dla wszystkich pól</h4>
        <div v-if="editMode" class="form-group">
            <label>ID (Tylko do odczytu)</label>
            <input type="text" class="form-control" disabled v-model="product.id" />
        </div>
        <div class="form-group">
            <label>Nazwa</label>
            <input type="text" class="form-control" v-model="product.name" />
        </div>
        <div class="form-group">
            <label>Opis</label>
            <input type="text" class="form-control" v-model="product.description" />
        </div>
        <div class="form-group">
            <label>Kategoria</label>
            <select v-model="product.category" class="form-control">
                <option v-for="c in categories" v-bind:key="c">{{ c }}</option>
            </select>
        </div>
        <div class="form-group">
            <label>Cena</label>
            <input type="text" class="form-control" v-model="product.price" />
        </div>
        <div class="text-center">
            <router-link to="/admin/products" class="btn btn-secondary m-1">Anuluj</router-link>
            <button v-on:click="handleSave" class="btn m-1" v-bind:class="themeClassButton">
                {{ editMode ? "Zapisz zmiany" : "Zapisz produkt" }}
            </button>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
    data: function() {
        return {
            product: {}
        }
    },
    computed: {
        ...mapState({
            pages: state => state.pages,
            currentPage: state => state.currentPage,
            categories: state => state.categoriesData
        }),
        editMode() {
            return this.$route.params["op"] == "edit";
        },
        themeClass() {
            return this.editMode ? "bg-info" : "bg-primary";
        },
        themeClassButton() {
            return this.editMode ? "btn-info" : "btn-primary";
        }
    },
    validations: {
        product: {
            name: { required },
            description: { required },
            category: { required },
            price: { required },
        }
    },
    methods: {
        ...mapActions(["addProduct", "updateProduct"]),
        async handleSave() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                if(this.editMode) {
                    await this.updateProduct(this.product);
                } else {
                    await this.addProduct(this.product);
                }
                this.$router.push("/admin/products");
            }
        }
    },
    created() {
        if (this.editMode) {
            Object.assign(this.product, this.$store.getters.productById(this.$route.params["id"]));
        }
    }
}
</script>