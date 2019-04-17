<template>
    <div>
        vuex {{$store.state.counter}}
        <button @click="increment">increment</button>
        <button @click="decrement">decrement</button>
    </div>
</template>
<script>
import {mapActions } from 'vuex';

export default {
    methods: mapActions([
        'increment',
        'decrement'
    ])    
}
</script>

<style lang="">
    
</style>