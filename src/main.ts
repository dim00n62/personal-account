import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import JsButton from './kit/JsButton.vue';
import JsInput from './kit/JsInput.vue';
import JsStep from './kit/JsStep.vue';
import JsDialog from './kit/JsDialog.vue';
import JsSelect from './kit/JsSelect.vue';
import JsLoading from './kit/JsLoading.vue';
import JsRedDot from './kit/JsRedDot.vue';
import JsCloseButton from './kit/JsCloseButton.vue';
import JsIconButton from './kit/JsIconButton.vue';
import JsMenuItem from './kit/JsMenuItem.vue';
import JsArrow from './kit/JsArrow.vue';
import JsModalContainer from './plugins/src/JsModalContainer.vue';
import JsModalManager from './plugins/src/JsModalManager';

Vue.config.productionTip = false;
Vue.component('js-button', JsButton);
Vue.component('js-input', JsInput);
Vue.component('js-dialog', JsDialog);
Vue.component('js-select', JsSelect);
Vue.component('js-loading', JsLoading);
Vue.component('js-red-dot', JsRedDot);
Vue.component('js-close-button', JsCloseButton);
Vue.component('js-icon-button', JsIconButton);
Vue.component('js-menu-item', JsMenuItem);
Vue.component('js-arrow', JsArrow);
Vue.component('js-step', JsStep);
Vue.component('js-modal-container', JsModalContainer);
Vue.prototype.modalManager = new JsModalManager();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
