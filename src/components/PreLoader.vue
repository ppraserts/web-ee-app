<template>
  <div class="loader" v-if="displayPreLoader"></div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'preloader',
  computed: {
    ...mapGetters('applications',{ displayPreLoader: 'displayPreLoader' }),
  }
}
</script>
<style scoped>
.loader {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: url('../assets/preloader.gif') 50% 50% no-repeat rgb(249,249,249);
  opacity: .8;
}
</style>
