import Vue from 'vue'
import Main from './main.vue'
import Vuetify from 'vuetify/lib';
const ToastConstructor = Vue.extend(Main)

let instance
const toast = function (options) {
  options = options || {}
  instance = new ToastConstructor({
    data: options
  }) 
  instance.$vuetify = new Vuetify().framework; // <---- add
  let vm = instance.$mount()
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}
export default toast