<template>
    <table class="table table-dark">
        <tbody>
            <tr v-for="(value, name) in personInfo" :key="name">
                <th scope="row">{{name}}:</th>
                <td>{{value}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'PersonInfo',
    props: ['personInfo']
}
</script>