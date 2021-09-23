<template>
<div>
 <v-toolbar
      dark
      
    color="#000"
    >  <v-btn
              icon
             @click="goBack"
            >
              <v-icon color="#fff">mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>BEE玩法介绍：</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  <div class="about ma-3 pa-3">
    <p class="ft14"> 挖矿入单采用usdt+bee的方式。比例为8：2
      <br />举例：准备入单1000usdt，则分为800 usdt+价值200usdt的bee组合入单。获得算力为1000u的算力。入单后的BEE 50%销毁，50%提供lp矿池
    </p>
    <h4 class="mb-2">挖矿规则：</h4>
    <div class="ft14">投入上不封顶，100u即可参与<br />所有投入usdt分为三大类玩法</div>
    <div class="ft14">
      一. 5%用于回购销毁BEE<br />
      二.10%USDT+50%未销毁的BEE用于创建LP<br />
      三. 55%用于分享激励，分享奖励最高可拿30节,直推奖励无业绩要求
    </div>
    <div class="ft14 ml-3 pl-2">

      1-2节业绩2000u 拿3节<br />
      1-2节业绩6000u 拿8节<br />
      1-2节业绩10000u 拿13节<br />
      1-2节业绩20000u 拿21节<br />
      1-2节业绩30000u 拿30节<br />
      1节7% 2节5% 3节4% 4-15节2% 16-30节1%
      （注：当所有usdt收益达到自身投入额度的三倍时必须复投，否则不再产生分享U收益）
    </div>
    <div class="ft14">四. 挖矿BEE代币</div>
    <div class="ft14 ml-3 pl-2">
      总发行量2.1亿，初期认购以及空投奖励和创建LP流动池总消耗500万枚，剩余部分2.05亿枚全部挖矿产出。
      BEE全网每天基础产量5000枚
      ，总usdt入金量每增加50万，增产1000枚。
      头矿期间每天固定产出10000枚，期限为30天。
    </div>
    <div class="ft14">
      全网算力分配<br />
1、静态占比60%  <br />  
计算公式为<br />
（自身投入usdt/全网总的usdt）*全网总产量*60%<br />
2、动态占比40%<br />
根据1-30节U业绩和小区业绩分为V1-V5级别矿工。<br />
<ul class="jibie">
  <li>
    <div>节点级别</div>
    <div>节点入金(1-30)</div>
    <div>小区业绩</div>
    <div>全网分配</div>
  </li>
  <li>
    <div>V1</div>
    <div>1-30节 2000 USDT</div>
    <div>无要求</div>
    <div>15%</div>
  </li>
  <li>
    <div>V2</div>
    <div>1-30节 3万 USDT  </div>
    <div>无要求</div>
    <div>9%</div>
  </li>
  <li>
     <div>V3</div>
    <div>1-30节  30万 USDT </div>
    <div>无要求</div>
    <div>7%</div>
  </li>
  <li>
    <div>V4</div>
    <div>1-30节 60万 USDT </div>
    <div>无要求</div>
    <div>5%</div>
  </li>
  <li>
    <div>V5</div>
    <div>1-30节  80万USDT</div>
    <div>无要求</div>
    <div>4%</div>
  </li>
</ul>
注:1.级别业绩考核为 USDT所能拿到的节数奖励总和，如 某矿工A的1~2节为1万U，那么矿工A的业绩考核为 1~13节总业绩！<br />
  2.V1-V5直推业绩必须大于2000USDT。<br />
计算公式为<br />
    （全网总算力*40%*自身级别对应的算力百分比）/该级别全网总人数<br />
(注：所有复投usdt算力叠加)
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goBack(){
      this.$router.go('-1')
    }
  },
}
</script>
<style lang="scss" scoped>
.about {
  color: #fff;
  line-height: 2;
  border-radius: 16px;
  box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
}
h1 {
  text-align: center;
}
.sj {
  text-indent: 10px;
}
.jibie{
  margin: 10px 0;
  border-right: 1px solid #dcdcdc;;
  border-left: 1px solid #dcdcdc;;
  border-top: 1px solid #dcdcdc;;
  padding: 0;
  & li{
    border-bottom: 1px solid #dcdcdc;
    display: flex;
    justify-content: space-around;
    
  }
}
</style>
