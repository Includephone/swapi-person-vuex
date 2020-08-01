<template>
    <PersonInfo v-if="personInfo" v-bind:personInfo="personInfo"/>
    <Loading v-else/>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import PersonInfo from '../components/Person-info.vue';
import Loading from '../components/Loading.vue';
export default {
    name: 'Person',
    components: {
        PersonInfo,
        Loading
    },
    methods: {
        ...mapActions(['GET_PERSON_INFO'])
    },
    computed: {
        ...mapGetters(['personInfo'])
    },
    mounted(){
        this.GET_PERSON_INFO(this.$route.params.id);
    }
}
</script>