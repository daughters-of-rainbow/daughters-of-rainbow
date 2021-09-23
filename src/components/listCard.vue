<template>
  <div>
    <!-- 智能合约统计 -->
    <v-card flat dark class="my-3 pa-3 pb-5  wa elevation-12 rounded-xl">
      <div class="d-flex justify-space-between">
        <div class=" ml-2 ft18 ftw mt-2">{{isFlag==0?data.capital:data.value}} {{isFlag==0?'H/S':'TENT'}}</div>
        <div v-if="isFlag==0" class="cardC1 ft12 mt-3">{{data.date|TimeFormat}}</div>
      </div>
      <div class="mt-3 list pa-2 ft14">
        <div class="d-flex justify-space-between">
          <div :class="[isFlag==0?'boder2':'boder1']" class="borderL">
            <div :class="[isFlag==0?'cardC3':'']" class="ft12 cardC1 mb-2">24H</div>
            <div :class="[isFlag==0?'cardC3':'']" class="c2 cardC2 ft12">
              <countdown v-if="data&&data.duration" :time="countTime * 1000">
  <template slot-scope="props">{{ props.days }}D {{ props.hours }}H {{ props.minutes }}M {{ props.seconds }}S</template>
</countdown>
            </div>
          </div>
          <div v-if="isFlag==0" class="cardC1 ft12 text-center">
            <div>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                       24H <svg-icon className="ethMini_icon"  data_iconName="ques" /> 
                    </div>
                </template>
                <span class="cardC3">Top tooltip</span>
              </v-tooltip>
             
            </div>
            <div class="pt-2">--</div>
          </div>
          <div>
            <v-btn width="70px" height="40" class="buyBtn" @click="widthDrawHandle" rounded outlined>
              {{isFlag==0?$t("m.unStake"): $t("m.widthDraw") }}
            </v-btn>
          </div>
        </div>
        <div></div>
      </div>
    </v-card>
  </div>
</template>
<script>
import VueCountdown from '@chenfengyuan/vue-countdown';
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          duration:0
        }
      }
    },
     isFlag:{
        type:Number,
        default:0
    } ,
    id:{
        type:Number,
        default:0
    } ,
    isMiner: {
      type: Boolean,
      default: false
    }
  },
  components:{
   'countdown': VueCountdown
  },
  computed:{
    countTime(){
      if(this.data&&this.data.date){
        let a = Math.floor(new Date().getTime()/1000),//当前时间
         c = this.data.date,//投资时间
         b = this.data.duration,//投资时长
         d = Math.floor((a-c)/b)//周期
        let contTime = 0;
        console.info(d,'当前周期')
        if(d){
          contTime = ((d+1)*b+c)-a
        }else{
          contTime = c+b-a
        }
       console.info(contTime,'contTime')
        return contTime>0?contTime:0
      }else{
        return 0
      }
      
    }
  },
  data() {
    return {
      beeHandleAddr: '',
     
    }
  },
  filters:{
     TimeFormat (val) {
        if (!val) {
          return ''
        }
        val = val * 1000
        var date = new Date(val);
        
        var year = date.getFullYear()
        console.info(year,'year')
        var month = date.getMonth() + 1
        var day = date.getDate()
        var hour = date.getHours()
        var min = date.getMinutes()
        var second = date.getSeconds()
        month = month < 10 ? '0' + month : month
        day = day < 10 ? '0' + day : day
        hour = hour < 10 ? '0' + hour : hour
        min = min < 10 ? '0' + min : min
        second = second < 10 ? '0' + second : second
        return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + second
      }
  },
  methods:{
      widthDrawHandle(){
          this.$emit('captialHandle',{index:this.id,flag:this.isFlag})
      }
  }
}
</script>
<style lang="scss" scoped>
.wa {
  margin: 0 12px;
  background: linear-gradient(144.05deg, #32383e -69.07%, #212529 122.22%);
  box-shadow: -4px -2px 16px rgba(195, 200, 205, 0.08),
    4px 4px 18px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
}
.list {
  border: 1px solid #393e42 !important;
  border-radius: 16px !important;
  overflow: hidden;
}
.buyBtn {
  background: linear-gradient(144.05deg, #32383e -69.07%, #17191c 122.22%);
  box-shadow: -4px -2px 16px rgba(195, 200, 205, 0.08),
    4px 4px 18px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  border: 1px solid;
  border-image-source: linear-gradient(
    104.98deg,
    #323940 0.93%,
    #1a1e23 96.02%
  );
  color: #798488 !important;
  // border: none !important;
}
.borderL {
  padding-left: 15px;
  margin-left: 10px;
  border-left: 3px solid;
}
.boder1{
    border-color:#9162c6 ;
}
.boder2{
    border-color:#8ec2c9 ;
}
.cardC1 {
  color: #798488;
}
.cardC2 {
  color: #9162c6;
}
.cardC3 {
  color: #8ec2c9;
}
</style>