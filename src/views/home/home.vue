<template>
  <div class="home">
    <!-- 头部导航栏 -->
    <div class="nav"></div>
    <dv-border-box1>
      <div class="container" :style="`width: ${width}rem`" h18rem color-white flex justify-center items-center>
        <!-- 左侧列表 -->
        <div class="left"><!-- 通过title 进行控制 -->
          <homePanel class="left-panel panel" title="天气情况">
            <div class="weather">
              
            </div>
          </homePanel>
          <homePanel class="left-panel panel" title="最近农事"></homePanel>
          <homePanel class="left-panel panel" title="虫情检测"></homePanel>
          <homePanel class="left-panel panel" title="视频监控"></homePanel>
        </div>
        <!-- 中间展示 -->
        <div class="middle">
            <!-- 地图 -->
            <HomeMap class="map"></HomeMap>
        </div>
        <!-- 右侧列表 -->
        <div class="right">
          <homePanel class="panel" title="果树信息">
            <div class="jidizhonglei">
              <!-- 动态环图 -->
              <dv-active-ring-chart :config="zhongleiconf" style="width:150px;height:150px;" />
              
            </div>
          </homePanel>
          <homePanel class="panel" title="发展趋势"></homePanel>
          <homePanel class="panel" title="设备统计"></homePanel>
          <homePanel class="panel"></homePanel>
        </div>
      </div>
    </dv-border-box1>
    <div class="bottom">

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

import HomeMap from "./map/HomeMap.vue";
import homePanel from './home-panel.vue';
import { reactive } from 'vue';
export default {
  name: "Home",
  components: {
    HomeMap,
    homePanel
  },
  setup() {
    /* 动态环图配置 */
    const zhongleiconf = reactive({
      lineWidth: 24,
      digitalFlopStyle: {
        fill: 'pink',
        fontSize: 18,
      },
      data: [
        {
          name: "金柚",
          value: 90,
        },
        {
          name: "荔枝",
          value: 30,
        },
        {
          name: "苹果",
          value: 10,
        }
      ],
      color: [
        "rgba(45, 225, 253, 1)",
        "rgba(18, 254, 224, 1)",
        "rgba(105, 136, 248, 1) "
      ],
    })
    return {
      zhongleiconf
    }
  }
};
</script>

<style lang="less" scoped>
.container1 {
  width: 500px;
  height: 200px;
}

.home {
  background: linear-gradient(180deg, rgba(12, 19, 71, 1) 0%, rgba(11, 28, 157, 1) 6.09%, rgba(2, 12, 73, 1) 39.29%, rgba(2, 12, 73, 1) 80.1%, rgba(9, 26, 146, 1) 100%);
  width: 100vw;
  height: 100vh;
}

.nav {
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 86px;
  opacity: 1;
  background: url('../../assets/images/nav.png') no-repeat;
  border: 1px solid rgba(0, 0, 0, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
  background-size: 100% 100%;
}

.container {
  height: 100%;
  display: flex;
  justify-content: space-between;

  .left {
    flex: 2;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .panel {
      width: 100%;
      height: 100%;
    }

  }

  .middle {
    overflow: hidden;
    flex: 3;
    height: 100%;
    width: 100%;

    .map:after {
      content: '';
      display: block;
      visibility: hidden;
    }
  }

  .right {
    flex: 2;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .panel {
    width: 100%;
    height: 100%;
  }
}

.bottom {
  height: 100px;
  width: 100vw;
}
</style>
