<script>
 
</script>

<template>
  <h1>Food</h1>
  <p>My favorite food has a diploma image attached to it.</p>
  <div id="wrapper">
    <food-item
     food-name="Apples"
     food-desc="Apples are a type of fruit that grows on trees."
     v-bind:is-favorite="true"/>
    <food-item 
    food-name="Pizza"
    food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
    v-bind:is-favorite="false"/>
    <food-item 
    food-name="Rice"
   
    v-bind:is-favorite="false"/>
    
  </div>
 
  
</template>

<style>
 #wrapper {
  display: flex;
  flex-wrap: wrap;

 }

 #wrapper > div {
  border: dashed black 1px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;


 }
 
  
</style>
