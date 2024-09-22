<template>
    <div>
        <h2>{{ foodName }}
        <img src="/public/img_quality.svg" v-show="isFavorite">
        </h2>
        <p>{{ foodDesc }}</p>
    </div>
    
</template>

<script>
    export default {
        props: [
            'foodName',
            'foodDesc',
            'isFavorite'
        ]
    }
</script>

<style>
   img {
    height: 1.5em;
    float: right;
   }
</style>