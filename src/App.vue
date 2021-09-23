<template>
  <v-app id="inspire">
    <v-main class="idex">
      <router-view v-if="defaultActive" />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  provide() {
        return {
            reload: this.reload
        };
    },
  data: () => ({
    //
    defaultActive:true
  }),
  async mounted() {
    //  window.addEventListener('message', (res) => {
   
    //     if (res.data.message && res.data.message.action == "setAccount") {
    //          console.info(res,'-----')
    //        window.location.reload();
    //     }
    //     if (res.data.message && res.data.message.action == "setNode") {
    //       window.location.reload();
    //     }
    // });
  },
  methods: {
    reload() {
            this.defaultActive = false;
            this.$nextTick(() => {
                this.defaultActive = true;
            });
    },
  },
};
</script>
<style >
#inspire{
  color:'#E5E5E5';
     /* background: url('./assets/h5-bg.png') no-repeat; */
  /* background-size: cover; */
  /* background-size: 100% 100%; */
  overflow: hidden;
 /* background: linear-gradient(179.59deg, #010202 3.22%, #000000 16.38%, #333333 32.5%, #191B1E 98.49%); */
}
   ::-webkit-scrollbar {
     width: 0 !important;
   }
   ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
.idex{
  height: 100%;
}
.v-input__append-inner{
  margin-top: 10px!important;
}
.ft12{
  font-size: 12px;
}
.ft13{
  font-size: 13px;
}
.ft14{
  font-size: 14px;
}
.ft16{
  font-size: 16px;
}
.ft18{
  font-size: 18px;
}
.ft20{
  font-size: 20px;
}
.ft24{
  font-size: 24px;
}
.ft36{
  font-size: 36px;
}
.ftw{
  font-weight: bold;
}
.hei{
  color: #000;
}
.v-dialog{
    overflow: visible!important;;
}
</style>
