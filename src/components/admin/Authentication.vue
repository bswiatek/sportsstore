<template>
    <div class="m-2">
        <h4 class="bg-primary text-white text-center p-2">Panel administracyjny sklepu sportowego</h4>
        <h4 v-if="showFailureMessage" class="bg-danger text-white text-center p-2 my-2">
            Uwierzytelnianie nie powiodło się. Spróbuj ponownie.
        </h4>
        <div class="form-group">
            <label>Nazwa użytkownika</label>
            <input v-model="$v.username.$model" class="form-control">
            <validation-error v-bind:validation="$v.username" />
        </div>
        <div class="form-group">
            <label>Hasło</label>
            <input type="password" v-model="$v.password.$model" class="form-control">
            <validation-error v-bind:validation="$v.password" />
        </div>
        <div class="text-center">
            <button v-on:click="handleAuth" class="btn btn-primary">Zaloguj</button>
        </div>
    </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";
import ValidationError from "../ValidationError";
export default {
    components: { ValidationError },
    data: function() {
        return {
            username: null,
            password: null,
            showFailureMessage: false,
        }
    },
    computed: {
        ...mapState({ authenticated: state => state.auth.authenticated })
    },
    validations: {
        username: { required },
        password: { required }
    },
    methods: {
        ...mapActions(["authenticate"]),
        async handleAuth() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                await this.authenticate({ name: this.username, password: this.password });
            }
            if (this.authenticated) {
                this.$router.push("/admin");
            } else {
                this.showFailureMessage = true;
            }
        }
    }
}
</script>