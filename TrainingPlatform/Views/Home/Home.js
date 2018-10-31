import Vue from 'vue'
import { exampleComponent } from '../Components/Components'

new Vue({
  el: '#app',
  components: {
    'example-component': exampleComponent
  },
  data: {
    msg: 'Hello from Vue!'
  }
})
