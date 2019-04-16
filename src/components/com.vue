<template>
    <div>
        <slot name="a"></slot>
        <h1>hell0 {{age}}</h1>
        <button @click="$emit('patch')">突突突突突突</button>
        
        <slot name="b"></slot>
    </div>
    
</template>

<script>
export default {
    props: ['age'],
    data(){
        return {
            name: 'com'
        }
    },
    methods:{
      
    }
}
</script>