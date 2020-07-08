<template>
  <div>
    <h1>Stations</h1>
    <Loader v-if="stationsLoading" />
    <ul v-else>
      <li v-for="station in stations" :key="station.id">
        <span>{{ station.name }}</span>
        <Heart :data-stationsId="station.id" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["stationsLoading", "stations"])
  },
  methods: {}
};
</script>

<style scoped>
ul {
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  margin: 5px 0;
  padding: 5px;
  background-color: rgb(235, 242, 255);
}

li span {
  margin-right: 5px;
}
</style>
