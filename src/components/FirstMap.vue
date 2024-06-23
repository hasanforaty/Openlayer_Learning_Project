<script setup lang="ts">




import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import View from 'ol/View.js';
import Tile from 'ol/layer/Tile.js'
import {onMounted} from "vue";
import 'ol/ol.css'
let map:any = undefined

onMounted(()=>{
  map = new Map({
    view: new View({
      center:[0,0],
      zoom:3,
      maxZoom:6,
      minZoom:2,

    }),
    layers:[
      new Tile({
        source: new OSM()
      })
    ],
    target:'js-map',
  })

})
</script>

<template>
    <div id="js-map" class="map">

    </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
.map{
  height: 100vh;
  width: 100vw;
}
</style>