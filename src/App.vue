<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view/>
    </v-main>
    <FooterBar />
  </v-app>
</template>

<script>

import NavBar from './components/common/NavBar.vue';
import FooterBar from './components/common/FooterBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
@import './assets/styles/main.css';
</style>
