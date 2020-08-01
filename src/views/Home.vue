<template>
    <div>
        <SearchForm/>
        <PersonList
            v-if="personList.length" 
            v-bind:personList="personList"/>
        <loading v-else/>
        <h2>History</h2>
        <PersonList
            v-if="history.length"
            v-bind:personList="history"/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import PersonList from '../components/Person-list.vue';
import SearchForm from '../components/search-form.vue';
import Loading from '../components/Loading.vue';
export default {
    name: 'Home',
    components:{
        PersonList,
        SearchForm,
        Loading
    },
    methods:{
        ...mapActions(['GET_PERSON_LIST'])
    },
    computed: {
        ...mapGetters(['personList', 'history'])
    },
    mounted(){
        if(!this.personList.length){
            this.GET_PERSON_LIST();
        }
    }
}
</script>