<template>
  <div>
    <!-- <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link> -->
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'HomeView',

  components: {
    HelloWorld,
  },
};
</script>
