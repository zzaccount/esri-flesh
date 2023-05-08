<template>
  <div class="map">
    <div class="mapDiv" id="mapDiv"></div>
  </div>
</template>

<script>
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer.js";
// d24ad924673e258c4ab0586215144597	

export default {
  name: "Home",
  components: {},
  mounted() {
    
    //arcgis for js 加载天地图
    var tiledLayer = new WebTileLayer({
        urlTemplate: "http://{subDomain}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=d24ad924673e258c4ab0586215144597",
        subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
      });
      var tiledLayer2 = new WebTileLayer({
        urlTemplate: "http://{subDomain}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=d24ad924673e258c4ab0586215144597",
        subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
      });
    const myMap = new Map({                // Create a Map object
      basemap: 'osm',
      layers: [tiledLayer, tiledLayer2]
    });

    const mapView = new MapView({          // The View for the Map object
      map: myMap,
      container: "mapDiv",
      zoom: 10,
      center: [115.805, 23.027]
    });
  }

}
</script>

<style lang="less" scoped>

.mapDiv {
  height: 100vh;
}
</style>
