import { DatePicker, Badge } from 'element-ui';
import Vue from 'vue';

export default {
    name: 'ExDatePicker',
    mixins: [DatePicker],
    props: {
        isDot: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return{
            badge: null
        }
    },
    methods:{
        mountBadge(){
            const DatePicker = Vue.extend(DatePicker)
            let dp = new DatePicker({
                components: {
                    DatePicker
                },
            })
            var that = this
            console.log(dp)
            var tds = dp(that.elem).find('td')
            console.log(tds)
            const parent = this.$el.parentNode;
            console.log(parent)
            console.log(this.$el)
            const Badge = Vue.extend(Badge)
            this.badge = new Badge({
                components: {
                    Badge
                },
                propsData: {
                    isDot: this.isDot
                }
            })
        }
    },
    mounted(){
        this.mountBadge();
    },

}