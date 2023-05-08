<template>
  <div class="home-panel">
    <dv-border-box10>
      <div class="head">
        <i class="icon"></i>
        <div class="title">{{title }}</div>
      </div>
      <div class="default">
        <slot class="default"></slot>
      </div>

    </dv-border-box10>

  </div>
</template>

<script>
export default {
  name: "HomePanel",
  props: {
    title: {
      type: String,
      default: "园区概括",
    },
  }
}
</script>

<style lang="less" scoped>
.home-panel {
  background: rgba(0, 19, 66, 1);
  border: 2px solid rgba(8, 72, 138, 1);
  box-shadow: inset 0px 1px 20px 0px rgba(18, 142, 232, 0.34);
  .head {
    position: relative;
    height: 32px;
    .icon {
      width: 14px;
      height: 32px;
      background: url('../../assets/images/panel-icon.png') no-repeat;
      display: inline-block;
      position: absolute;
      left: 19px;
      top: 24px;
    }

    .title {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: -0.01px;
      line-height: 26.06px;
      color: rgba(255, 255, 255, 1);
      position: absolute;
      top: 20px;
      left: 40px;
    }
  }

  .default{
    padding-top: 10px;
  }
}
</style>
