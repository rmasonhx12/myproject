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
       // props: ['foodName','foodDesc','isFavorite']
       // change define props as array to define as a object
       props: {
        foodName: {
            type: String,
            required: true
        },
        foodDesc:{
            type: String,
            required: false,
            default: 'This is the default description'
        },
        isFavorite: { 
            type: Boolean,
            required: false,
            default: false
        }
       }
    }
</script>

<style>
   img {
    height: 1.5em;
    float: right;
   }
</style>