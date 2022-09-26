export * from './request';
export * from './modal';
export * from './format';
export * from './dispatch';
export * from './rightbar';
export * from './agent';
//
import store from '@/store';

export function setMainAreaClass(value) {
  store.commit("SET_MAINAREACLASS", value);
}
