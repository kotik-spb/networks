<template>
  <div id="app">
    <div class="container">
      <h3 class="text-left">
        Выбранная сеть(город): {{ chosenNetwork ? chosenNetwork.city : "-" }}
      </h3>
      <h3 class="text-left">
        Количество станций сети: {{ stations.length ? stations.length : "-" }}
      </h3>
      <hr />
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <Networks @chosenNet="changeNetwork" />
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <Stations />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Networks from "./components/Networks.vue";
import Stations from "./components/Stations.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Networks,
    Stations
  },
  data() {
    return {
      chosenNetwork: ""
    };
  },
  computed: {
    ...mapGetters(["stationsLoading", "stations"])
  },
  methods: {
    changeNetwork(netName) {
      this.chosenNetwork = netName;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
