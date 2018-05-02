// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { 
    Form,FormItem,Input,
    TimeSelect,TimePicker,Button 
} from 'element-ui'

Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input);
Vue.component(TimeSelect.name, TimeSelect);
Vue.component(TimePicker.name, TimePicker);
Vue.component(Button.name, Button);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
