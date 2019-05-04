<template lang='html'>
    <div>
        <span>pageb:{{ $store.state.count.count }}</span>
        <button @click="add">add</button>
        <button @click="reduce">reduce</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: mapActions('count', ['add','reduce'])
}
</script>

<style lang="css">
    
</style>