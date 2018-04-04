import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Import getters
import { productGetters, manufacturerGetters } from './getters';
import { productMutations, manufacturerMutations, cartMutations } from './mutations';
import { productActions, manufacturerActions } from './actions';

export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: []
  },
  // GETTERS
  getters: Object.assign({}, productGetters, manufacturerGetters),
  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
  actions: Object.assign({}, productActions, manufacturerActions),
});
