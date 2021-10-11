<template>
  <div v-if="snackbar">
    <v-snackbar light v-model="snackbar" top timeout="3500">
      <div class="info">{{ text }}</div>
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
         <v-icon dark>mdi-close</v-icon>
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
      text: 'Loading'
    }
  }
}
</script>

<style lang="scss" scoped>
.info{
    color: red;
    font-family: Roboto, sans-serif;
    text-align: center;
}
.v-icon.v-icon {
  font-size: 18px;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 50px;
  margin-left: -18px;
}
</style>
