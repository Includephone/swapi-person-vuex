<template>
    <ul class="list-group">
        <router-link v-for="person in personList" :key="person.id" class="list-group-item bg-dark text-white" :to="{ path: '/person/'+person.id}">
            {{person.name}}
        </router-link>
    </ul>
</template>

<script>
export default {
    name: 'PersonList',
    props: ['personList']
}
</script>