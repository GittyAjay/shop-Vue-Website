<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>
<script>
export default {
  name: "App",
  created(){
    return this.$store.commit('setUser');
  }
};
</script>