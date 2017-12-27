var example2 = new Vue({
  el: '#example-2',
  
  // define methods under the `methods` object
  methods: {
    showQueue: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ')
      // `event` is the native DOM event
      
    }
  }
})