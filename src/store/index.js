import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stationsLoading: true,
    stations: [],
    likedStations: []
  },
  mutations: {
    SET_STATIONS_LOADER(state, payload) {
      state.stationsLoading = payload;
    },
    SET_STATIONS(state, stations) {
      state.stations = stations;
    },
    CHANGE_RATE(state, obj) {
      if (obj.rate) {
        state.stations.filter(station => station.id != obj.id);
      }
      // state.likedStations = obj.rate;
    }
  },
  actions: {
    async fetchNetworks() {
      return await fetch(
        "https://api.citybik.es/v2/networks?fields=id,location"
      )
        .then(data => data.json())
        .then(networks => {
          return networks.networks.map(network => {
            return {
              id: network.id,
              city: network.location.city
            };
          });
        });
    },
    async fetchStations({ dispatch, commit }, id) {
      const stations = await fetch(`https://api.citybik.es/v2/networks/${id}`)
        .then(data => data.json())
        .then(s => s.network.stations)
        .catch(e => console.log(e));
      dispatch("changeLoading", false);
      commit("SET_STATIONS", stations);
    },
    changeLoading({ commit }, bool) {
      commit("SET_STATIONS_LOADER", bool);
    },
    changeRate({ commit }, bool) {
      commit("CHANGE_RATE", bool);
    }
  },
  getters: {
    stationsLoading: s => s.stationsLoading,
    networksLoading: s => s.networksLoading,
    stations: s => s.stations,
    likedStations: s => s.likedStations
  },
  modules: {}
});
