import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import { store } from './store/index.js';

/* fontAwesome */
import { library } from "@fortawesome/fontawesome-svg-core"; 
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlay, faPause, faPowerOff } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faPause, faPowerOff);

Vue.config.productionTip = false; 
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

/* rem 적용 */
const htmlDoc = document.documentElement;
htmlDoc.style.fontSize =  parseInt(htmlDoc.offsetWidth / 360 * 100) + '%';

const metaTag = document.createElement('meta');
metaTag.name = "viewport";
metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no";
document.getElementsByTagName('head')[0].appendChild(metaTag);