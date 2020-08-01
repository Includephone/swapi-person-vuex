<template>
    <form @submit.prevent="onSubmit" class="form-inline my-2 ml-2 justify-content-center">
        <input v-model="query" class="form-control w-75" type="text" />
        <button class="btn btn-info w-25">Search</button>
    </form>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'SearchForm',
    data(){
        return{
            query: ''
        }
    },
    methods:{
        ...mapActions(['GET_PERSON_LIST']),
        onSubmit(){
            this.GET_PERSON_LIST(this.query);
            this.query='';
        }
    }
}
</script>