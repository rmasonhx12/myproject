// W3 code walkthrough

import { createApp } from 'vue'
import App from './App.vue'
// import components
import FoodItem from './components/FoodItem.vue'

//createApp(App).mount('#app')
const app = createApp(App)
app.component('food-item', FoodItem)
app.mount('#app')
