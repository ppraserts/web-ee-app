<template>
  <div id="locale">
    <span @click="switchLocale('th')">{{ $t("message.th") }}</span> : <span @click="switchLocale('en')">{{ $t("message.en") }}</span> 
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Locale',
   methods: {
    ...mapActions('applications',[
      'switchLocale'
    ])
  }
}
</script>
<style scoped>
#locale {
    margin-left: -30px;
}
span {
  cursor: pointer;
}
span:hover {
  color: #000;
}
</style>
