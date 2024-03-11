<template>
  <div ref="map" class="map-container"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl';

export default {
  name: 'winterMap',
  async mounted() {
    // Initialize the map
    mapboxgl.accessToken = 'pk.eyJ1IjoibmJsYXNsZXkiLCJhIjoiY2x0Y2dmcGdiMjJ1NjJqcGQyMWhmODZ5ZCJ9.bDMq7X1x_fXsHWpcZppPAA';
    this.map = new mapboxgl.Map({
      container: this.$refs.map,
      style: 'mapbox://styles/nblasley/cltc81vh100mt01ra5pqre2oy',
      center: [-120.39, 47.349],
      zoom: 7.69,
    });
  },
};
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
}
</style>