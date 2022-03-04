<template>
  <div>
    <!-- <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link> -->
    <news-grid />
    <!-- <hello-world /> -->
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue';
import NewsGrid from '../components/NewsGrid.vue';

export default {
  name: 'HomeView',

  components: {
    // HelloWorld,
    NewsGrid,
  },
};
</script>
