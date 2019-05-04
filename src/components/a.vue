<template lang='html'>
    <div class="a">
        pagea:{{ $store.state.money.money }}
        <button @click="add(2)">increment</button>
        <button @click="reduce">decrement</button>
    </div>
</template>

<script>
import {mapActions } from 'vuex';

export default {
    methods: mapActions('money', [
        'add',
        'reduce'
    ])    
}
</script>

<style lang="css">
    
</style>