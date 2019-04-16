<template>
    <div class="events">
        <button type="button" name="button" @click="msg('s')">test</button>
    </div>
</template>
<script>
    export default {
        methods:{
            msg:function(a){
                console.log(a);
            }
        }
    }
</script>

<style lang="css">
    
</style>