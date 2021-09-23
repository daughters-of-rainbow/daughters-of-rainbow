<template>
  <div>
    <v-snackbar light v-model="snackbar" top timeout="2000">
      <div class="info">{{ text }}</div>
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
         <v-icon dark>
       mdi-close
      </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: 'loading',
  data() {
    return {
      snackbar: true,
      text: '正在加载'
    }
  }
}
</script>

<style lang="scss" scoped>
.info{
    color: red;
}
</style>
