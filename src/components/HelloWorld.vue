<template>
  <v-container>
    <v-row class="pa-0">
       <v-img :src="appBg"></v-img>
    </v-row>
  </v-container>
</template>

<script>
import appBg from "../assets/bg.png";
export default {
  name: "HelloWorld",

  data: () => ({
    appBg: appBg,
  }),
};
</script>
