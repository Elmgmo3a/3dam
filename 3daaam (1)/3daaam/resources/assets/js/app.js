
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
 import App from './App.vue';

new Vue(Vue.util.extend({ router }, App)).$mount('#app');


require('./bootstrap');
require('./select2');

window.Vue = require('vue');

const routes = [
  {
      name: 'Example',
      path: '/',
      component: Example
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');


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

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 
 /*
var daily = {
	
  template: "	<div class='dhe-example-section' id='ex-1-3'><div class='dhe-example-section-header'><h3 class='dhe-h3 dhe-example-title'>The Queue of the Appointment </h3><div class='dhe-example-description'>Drag and drop items within and between lists. A visual helper is displayed indicating where the item will be positioned if dropped.</div></div><div class='dhe-example-section-content'><!-- BEGIN: XHTML for example 1.3 --><div id='example-1-3'><div class='queuecolumn queueleft first'><ul class='queuesortable-list'><li class='queuesortable-item'>Mohammed Ali ----> 7:00 - 7:20</li><li class='queuesortable-item'>Manal Hamed ----> 7:25 - 7:35</li><li class='queuesortable-item'>Safaa Mohsen ----> 7:45 - 8:00</li><li class='queuesortable-item'>Mai Reda ----> 8:10 - 8:35</li></ul></div><!--	<div class='queuecolumn queueleft'><ul class='queuesortable-list'><li class='queuesortable-item'>Sortable item C</li><li class='queuesortable-item'>Sortable item D</li></ul></div><div class='queuecolumn queueleft'><ul class='queuesortable-list'><li class='queuesortable-item'>Sortable item E</li></ul></div> --><div class='queueclearer'>&nbsp;</div></div><!-- END: XHTML for example 1.3 --></div></div>"
}


;
var weekly = {
  template: '<label></label> '
};




var app1 = new Vue({
  el: '#app1',
 data: {
    currentComponent: 'weekly'
  },
  components: {
    'daily': daily,
    'weekly': weekly
  },
  methods: {
    setComponent: function (component) {
        this.currentComponent = component;
    }
  }
});

*/



new Vue({
	el: '#queuelist',
	methods:{
		select: function(event) {
			alert(":S");
		}
    }
});
