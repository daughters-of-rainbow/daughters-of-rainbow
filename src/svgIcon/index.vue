<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
 
<script>
export default {
  name: "svgIcon",
  props: {
    data_iconName: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    svgClass() {
      //svg 的class
      if (this.className) {
        return `svg-icon ${this.className}`;
      } else {
        return "svg-icon";
      }
    },
    iconName() {
      //svg xlink-href 指向的文件名
      return `#icon-${this.data_iconName}`;
    },
  },
};
</script>
 
<style scoped>
.svg-icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  z-index: 999;
}

.banner_icon {
  width: 100%;
}
.detail_icon {
  width: 44px;
  height: 36px;
}
.lang_icon {
  width: 18px;
  height: 18px;
}
.home_active_icon {
  width: 18px;
  height: 18px;
}
.trade_icon {
  width: 18px;
  height: 18px; 
}
.trade_active_icon {
  width: 18px;
  height: 18px;
}
.zichan_icon{
   width: 18px;
  height: 18px; 
} .zichan_active_icon{
   width: 18px;
  height: 18px; 
}
.tongji_icon {
  width: 18px;
  height: 18px; 
}
.rewardInfo_icon{
    width: 18px;
  height: 18px; 
}
.rewardInfo_active_icon{
  width: 18px;
  height: 18px;
}
.compower_icon{
 width: 18px;
  height: 18px;
}
.compower_active_icon {
     width: 18px;
  height: 18px;
}
.invate_icon{
 width: 18px;
  height: 18px;
}
.invate_active_icon {
     width: 18px;
  height: 18px;
}
.tongji_active_icon {
  width: 18px;
  height: 18px;
  }
.logo_icon {
  width: 25px;
  height: 25px;
}
.logoMini_icon{
  width: 30px;
  height: 30px;
}
.v2{
    width: 40px;
  height: 40px;
}
.v3{
  width: 45px;
  height: 45px;
}
.v4{
  width: 55px;
  height: 55px;
}
.avtar_icon {
  width: 60px;
  height: 60px;
}
.contract_icon{
  width: 280px;
  height: 80px;
}
.settings_icon {
  width: 20px;
  margin-right: 10px;
}
.update_icon {
  width: 20px;
}
.arrow_down_icon {
  width: 20px;
}
.exchange_icon {
  width: 20px;
  vertical-align: middle;
}
.usdt_icon {
  width: 20px;
  height: 20px;
}
.ethMini_icon {
  width: 15px;
  height: 15px;
}
.cakeMini_icon {
  width: 15px;
  height: 15px;
  margin-right: 6px;
}
.atpt_icon {
  width: 20px;
  height: 20px;
}
.atptMax_icon {
  width: 30px;
  height: 30px;
}
.whiteList_icon{
 width: 18px;
  height: 18px;
}
.whiteList_active_icon{
 width: 18px;
  height: 18px;
}
.middle_svg{
  vertical-align: middle;
}
</style>
