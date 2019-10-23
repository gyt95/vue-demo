// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { 
    Form,FormItem,Input,
    TimeSelect,TimePicker,Button, 
    Badge, DatePicker,
    Table, TableColumn,
    Notification
} from 'element-ui'
import VueCascader from 'vue-three-tier-cascader'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

Vue.use(VueCascader);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(TableColumn);

Vue.component(CollapseTransition.name, CollapseTransition);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input);
Vue.component(TimeSelect.name, TimeSelect);
Vue.component(TimePicker.name, TimePicker);
Vue.component(Button.name, Button);

// 用于mixins
Vue.prototype.$notify = Notification;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
