<template>
  <div>
    <!-- <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link> -->
    <v-container fluid>
      <v-row align="center">
        <v-col cols="12">
          <v-select
            v-model="e2"
            :items="states"
            append-outer-icon="mdi-filter"
            menu-props="auto"
            hide-details
            label="Filter"
            single-line
            class="mt-0 pt-0 float-right"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
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
