<template>
  <div class="home">
    <!-- 头部导航栏 -->
    <div class="nav">
      <div class="nav-top"></div>
      <div class="nav-manel">
        <div class="nav-buttom">按钮信息</div>
        <div class="nav-buttom">按钮信息</div>
        <div class="nav-buttom">按钮信息</div>
        <div class="nav-buttom">按钮信息</div>
      </div>
    </div>
    <dv-border-box1>
      <div
        class="container"
        :style="`width: ${width}rem`"
        h18rem
        color-white
        flex
        justify-center
        items-center
      >
        <!-- 左侧列表 -->
        <div class="left">
          <!-- 通过title 进行控制 -->
          <homePanel class="left-panel panel" title="气象信息">
            <div class="farmdata"></div>
          </homePanel>
          <homePanel class="left-panel panel" title="果园基本信息"> </homePanel>
          <homePanel class="left-panel panel" title="视频监控"> </homePanel>
        </div>
        <!-- 中间展示 -->
        <div class="middle">
          <!-- 地图 -->
          <HomeMap class="map"></HomeMap>
          <div class="middle-bottom"></div>
        </div>
        <!-- 右侧列表 -->
        <div class="right">
          <homePanel class="panel" title="果树信息">
            <div class="jidizhonglei">
              <!-- 动态环图 -->
              <dv-active-ring-chart
                :config="zhongleiconf"
                style="width: 150px; height: 150px"
              />
            </div>
          </homePanel>
          <homePanel class="panel" title="发展趋势"></homePanel>
          <homePanel class="panel" title="设备统计"></homePanel>
          <homePanel class="panel"></homePanel>
        </div>
      </div>
    </dv-border-box1>
  </div>
</template>

<script>
import * as echarts from "echarts";

import HomeMap from "./map/HomeMap.vue";
import homePanel from "./home-panel.vue";
import { reactive } from "vue";
export default {
  name: "Home",
  components: {
    HomeMap,
    homePanel,
  },
  setup() {
    /* 动态环图配置 */
    const zhongleiconf = reactive({
      lineWidth: 24,
      digitalFlopStyle: {
        fill: "pink",
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
        },
      ],
      color: [
        "rgba(45, 225, 253, 1)",
        "rgba(18, 254, 224, 1)",
        "rgba(105, 136, 248, 1) ",
      ],
    });
    return {
      zhongleiconf,
    };
  },
};
</script>

<style lang="less" scoped>
.container1 {
  width: 500px;
  height: 200px;
}

.home {
  //background: linear-gradient(180deg, rgba(12, 19, 71, 1) 0%, rgba(11, 28, 157, 1) 6.09%, rgba(2, 12, 73, 1) 39.29%, rgba(2, 12, 73, 1) 80.1%, rgba(9, 26, 146, 1) 100%);
  width: 100vw;
  height: 100vh;
  background-color: black;
}

.nav {
  .nav-top {
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 76px;
    opacity: 1;
    background: url("../../assets/images/nav.webp") no-repeat;
    border: 1px solid rgba(0, 0, 0, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

    background-size: 100% 100%;
  }
  .nav-manel {
    width: 71.5625rem;
    height: 3.75rem;
    background: url("../../assets/images/nav-bottom.png") no-repeat;
    margin: 0 auto;
    border: 1px solid rgba(0, 0, 0, 1);
    display: flex;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    justify-content: space-around;
    .nav-buttom {
      font-size: 1rem;
      font-weight: 400;
      line-height: 60px;
      letter-spacing: 0px;
      color: rgba(150, 195, 246, 1);
      text-align: center;
      background: url("../../assets/images/nav-buttom.png") no-repeat center;
      width: 9.4375rem;
      cursor: pointer;
    }
    .nav-buttom:hover{
      color: antiquewhite;
    }
  }
}

.container {
  height: 100%;
  display: flex;
  justify-content: space-between;

  .left {
    flex: 3;
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
    flex: 6;
    height: 100%;
    width: 100%;

    .map:after {
      content: "";
      display: block;
      visibility: hidden;
    }
  }

  .right {
    flex: 3;
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
