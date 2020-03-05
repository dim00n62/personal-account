
import Vue from 'vue'
import JsModalManager from '../plugins/src/JsModalManager'

declare module 'vue/types/vue' {
  interface Vue {
    modalManager: JsModalManager
  }
}