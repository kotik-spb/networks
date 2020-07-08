<template>
  <div>
    <h1>Список сетей</h1>
    <Loader v-if="loading" />
    <select
      name="networks"
      id="networks"
      @change="fetchData"
      v-model="chosenNetwork"
      v-else
    >
      <option
        v-for="network in networks"
        :key="network.id"
        :value="{ id: network.id, city: network.city }"
      >
        {{ network.city }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      networks: [],
      chosenNetwork: ""
    };
  },
  async mounted() {
    this.networks = await this.$store.dispatch("fetchNetworks");
    this.chosenNetwork = this.networks[0];
    this.loading = false;
    await this.fetchData();
    this.$emit("chosenNet", this.chosenNetwork);
  },
  methods: {
    fetchData() {
      this.$store.dispatch("fetchStations", this.chosenNetwork.id);
       this.$emit("chosenNet", this.chosenNetwork);
    },
    getNewStations() {

    }
  }
};
</script>

<style>
select {
  width: 250px;
}
</style>
