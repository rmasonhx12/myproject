<template>
    <div>
        <h2>{{ foodName }}
        <img src="/public/img_quality.svg" v-show="foodIsFavorite">
        </h2>
        <p>{{ foodDesc }}</p>
        <button v-on:click="toggleFavorite">Favorite</button>
    </div>
    
</template>

<script>
    export default {
       props: ['foodName','foodDesc','isFavorite'],
       data() {
        return {
            foodIsFavorite: this.isFavorite
       }
    },

    methods: {
        toggleFavorite() {
            this.foodIsFavorite = !this.foodIsFavorite;
        }
    }
}
       // change back to array
       // change define props as array to define as a object
     /*   props: {
        foodName: {
            type: String,
            required: true
        },
        foodDesc:{
            type: String,
            required: false,
            default: 'This is the default description',
            validator: function(value) {
                if( 20<value.length && value.length<50) {
                    return true;
                } 
                else {
                    return false;
                }
        }
    },
        isFavorite: { 
            type: Boolean,
            required: false,
            default: false
        }
       }
    } */
</script>

<style>
   img {
    height: 1.5em;
    float: right;
   }
</style>