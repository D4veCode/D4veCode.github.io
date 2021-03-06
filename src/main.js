import Vue from 'vue'
import App from './App.vue'


import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/font-awesome/css/font-awesome.min.css'
import './assets/vendor/devicons/css/devicons.min.css'
import './assets/vendor/simple-line-icons/css/simple-line-icons.css'
import './assets/css/resume.min.css'

/*import './assets/vendor/jquery/jquery.min'
import './assets/vendor/bootstrap/js/bootstrap.bundle'
import './assets/vendor/jquery-easing/jquery.easing'
import './assets/js/resume'*/

Vue.config.productionTip = false


new Vue({
    render: h => h(App)
}).$mount('#app')