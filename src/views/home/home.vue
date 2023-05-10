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
      <div class="container" :style="`width: ${width}rem`" h18rem color-white flex justify-center items-center>
        <!-- 左侧列表 -->
        <div class="left">
          <!-- 通过title 进行控制 -->
          <homePanel class="left-panel panel" title="气象信息">
            <div class="weatherdata">
              <!-- 1 -->
              <div class="box">
                <div class="top1">
                  <div class="top-about">
                    <div class="top-about-left">
                      <i class="iconfont icon-wendu" style="font-size: 27px"></i>
                    </div>
                    <div class="top-about-right">温度</div>
                  </div>
                </div>
                <div class="bottom1">32<i style="font-size: 6px">℃</i></div>
              </div>
              <!-- 2 -->
              <div class="box">
                <div class="top1">
                  <div class="top-about">
                    <div class="top-about-left">
                      <i class="iconfont icon-fengsu" style="font-size: 27px"></i>
                    </div>
                    <div class="top-about-right">风速</div>
                  </div>
                </div>
                <div class="bottom1">32<i style="font-size: 6px">km/m²</i></div>
              </div>
              <!-- 3 -->
              <div class="box">
                <div class="top1">
                  <div class="top-about">
                    <div class="top-about-left">
                      <i class="iconfont icon-fengxiang" style="font-size: 27px"></i>
                    </div>
                    <div class="top-about-right">风向</div>
                  </div>
                </div>
                <div class="bottom1">东南</div>
              </div>
              <!-- 4 -->
              <div class="box">
                <div class="top1">
                  <div class="top-about">
                    <div class="top-about-left">
                      <i class="iconfont icon-eryanghuatannongdu" style="font-size: 27px"></i>
                    </div>
                    <div class="top-about-right">二氧化碳</div>
                  </div>
                </div>
                <div class="bottom1">101<i style="font-size: 6px">CO2</i></div>
              </div>
              <!-- 5 -->
              <div class="box">
                <div class="top1">
                  <div class="top-about">
                    <div class="top-about-left">
                      <i class="iconfont icon-shidu" style="font-size: 27px"></i>
                    </div>
                    <div class="top-about-right">湿度</div>
                  </div>
                </div>
                <div class="bottom1">99 <i style="font-size: 6px">RH</i></div>
              </div>
              <!-- 6 -->
              <div class="box">
                <div class="top1">
                  <div class="top-about">
                    <div class="top-about-left">
                      <i class="iconfont icon-jiangyuliang" style="font-size: 27px"></i>
                    </div>
                    <div class="top-about-right">降雨量</div>
                  </div>
                </div>
                <div class="bottom1">8 <i style="font-size: 6px">mm</i></div>
              </div>
            </div>
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
              <dv-active-ring-chart :config="zhongleiconf" style="width: 150px; height: 150px" />
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

    .nav-buttom:hover {
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

    //气象信息的六大盒子
    .weatherdata {
      display: flex;
      flex-wrap: wrap; //换行
      width: 100%;
      margin: 20px 0px 10px 0px;
      // background-color: #f0f0f0;
      padding: 20px;
      font-size: 10px;
      text-align: center; //这个好像有点多余，先不管他
      justify-content: space-around;
      
    }

    .box {
      width: 12em;
      // background-color: #ccc;
      box-sizing: border-box;
      // border: 1px solid #999;
      // padding: 10px;
      /* 在小盒子中添加内边距 */
      display: flex;
      /* 在小盒子中设置为弹性盒子 */
      flex-direction: column;
      /* 在小盒子中设置为垂直方向排列 */
    }

    .top1 {
      height: 50%;
      /* 上部分的高度为小盒子的一半 */
      // background-color: #f0f0f0;
      /* 设置上部分的背景色 */
      flex-direction: column;
    }

    .top-about {
      display: flex;
      /* 在上下两个盒子中设置为弹性盒子 */
      flex-direction: row;
      /* 在上下两个盒子中设置为水平方向排列 */
    }

    .top-about-left {
      width: 30%;
      // background-color: red;
      color: white;
      text-align: right;
    }

    .top-about-right {
      width: 70%;
      // background-color: blue;
      color: white;
      font-size: 9px;
      line-height: 30px;
      text-align: left;
      padding-left: 15px;
    }

    .bottom1 {
      /* 下部分的高度为小盒子的一半 */
      height: 100%;
      color: hsl(196, 90%, 51%);
      // background-color: #999;// 设置下部分的背景色
      font-size: 15px;
      font-family: system-ui;
      padding-top: 10px;
      text-align: center;
      font-weight: 700;
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
