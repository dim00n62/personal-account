import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Marketplace, { MarketplaceData } from '@/models/Marketplace';
import { TimeRange } from '@/types/TimeRange';

Vue.use(Vuex);

interface AppState {
  userName: string;
  marketplaces: {
    ids: string[];
    byId: { [key: string]: Marketplace };
  };
  range: TimeRange;
  loggedIn: boolean;
}

export default new Vuex.Store({
  state: {
    userName: 'User\'s name',
    marketplaces: {
      ids: [],
      byId: {}
    },
    range: TimeRange.Month,
    loggedIn: false
  },
  mutations: {
    addMarketplaceId(state: AppState, market: string) {
      state.marketplaces.ids.push(market);
    },
    addMarketplace(state: AppState, marketplace: MarketplaceData) {
      state.marketplaces.byId[marketplace.tag] = new Marketplace(marketplace);
    },
    setUsername(state: AppState, name: string) {
      state.userName = name;
    },
    setMarketplaces(state: AppState, markets: {ids: string[], byId: { [key: string]: Marketplace }}) {
      state.marketplaces = markets;
    },
    setTimeRange(state: AppState, range: TimeRange) {
      state.range = range;
    },
    setLoggedIn(state: AppState, value: boolean) {
      state.loggedIn = value;
    }
  },
  actions: {
    async fetchMarketplaces({ commit }) {
      try {
        const { data } = await axios.get('https://api.jstck.ru/account/marketplaces');

        commit('setUsername', data.payload.payload.name);
        const markets = data.payload.payload.marketplaces
          .reduce((result: {ids: string[], byId: { [key: string]: Marketplace }}, item: MarketplaceData) => {
          result.ids.push(item.tag);
          result.byId[item.tag] = new Marketplace(item);

          return result;
        }, {
          ids: [],
          byId: {}
        });
        commit('setMarketplaces', markets);
      } catch (e) {
        console.log(e);
      }
    },

    async register({ commit }, data) {
      try {
        await axios.post('https://api.jstck.ru/register', {
          login: data.login,
          email: data.email,
          password1: data.password1,
          password2: data.password1,
          name: data.name,
          company: data.company,
          phone: data.phone
        });
        commit('setLoggedIn', true);
      } catch {}
    },

    async login({ commit }, { login, password }: { login: string; password: string }) {
      try {
        await axios.post('https://api.jstck.ru/login', {
          login,
          password
        });
        commit('setLoggedIn', true);
      } catch {}
    },

    async logout({ commit }) {
      await axios.post('https://api.jstck.ru/logout');
      commit('setLoggedIn', false);
    },

    async checkLogin({ commit }) {
      try {
        await axios.get('https://api.jstck.ru/account/marketplaces');
        commit('setLoggedIn', true);
      } catch (e) {
        commit('setLoggedIn', false);
      }
    },

    addMarket({ commit }, market: string) {
      commit('addMarketplace', market);
      commit('addMarketplaceId', market);
    },
    setRange({ commit }, range: TimeRange) {
      commit('setTimeRange', range);
    }
  },
  modules: {
  },
  getters: {
    userName(state: AppState) {
      return state.userName;
    },
    marketplaceIds(state: AppState): string[] {
      return state.marketplaces.ids;
    },
    marketplaces(state: AppState) {
      return state.marketplaces.ids.map((id) => state.marketplaces.byId[id]);
    },
    timeRange({ range }: AppState) {
      return range;
    },
    loggedIn({ loggedIn }: AppState) {
      return loggedIn;
    }
  }
});
