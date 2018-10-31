import Vue from 'vue'

export const exampleComponent = Vue.component('example-component', {
  template: require('./Templates/TemplateExample.html'),
  props: ['text'],
  data: function () {
    return {
      count: 0
    }
  },  
})
