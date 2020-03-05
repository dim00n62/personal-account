import bus from './event-bus';
import { VueConstructor } from 'vue';

class JsModalManager {
  private modals: any[];

  constructor() {
    this.modals = [];
  }

  public open(component: VueConstructor, props = {}, listeners = {}) {
    const id = Math.random().toString();

    this.modals.push({
      component,
      props,
      listeners,
      id
    });
    bus.$emit('change', this.modals);

    return id;
  }

  public close(id: string) {
    this.modals.forEach((item, i) => {
      if (item.id === id) {
        this.modals.splice(i, 1);
      }
    });
  }

  public closeLast() {
    this.modals.pop();
  }

  public closeAll() {
    this.modals = [];
    bus.$emit('change', this.modals);
  }
}

export default JsModalManager;
