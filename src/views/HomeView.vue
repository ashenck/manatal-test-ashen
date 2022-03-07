<template>
  <div>
    <v-container fluid class="pb-0">
      <v-row>
        <v-col class="py-3" cols="12">
          <seach-bar class="my-0 d-flex d-sm-none" />
        </v-col>
      </v-row>
      <v-row class="py-0 my-0">
        <v-col class="pt-2 pb-2 pb-lg-0 pb-md-0" cols="12" lg="6" md="6" sm="6">
          <h2 class="deep-orange--text text-underline float-left">Top Headlines</h2>
        </v-col>
        <v-col class="pt-0 pb-0" cols="12" lg="6" md="6" sm="6">
          <filters-source class="my-0 pt-0 float-lg-right float-md-right float-sm-right" />
        </v-col>
      </v-row>
    </v-container>
    <news-grid class="pt-0" />
  </div>
</template>

<script>
import SeachBar from '../components/common/SearchBar.vue';
import FiltersSource from '../components/common/FiltersSource.vue';
import NewsGrid from '../components/NewsGrid.vue';

export default {
  name: 'HomeView',

  components: {
    SeachBar,
    FiltersSource,
    NewsGrid,
  },
  data: () => ({
    //
  }),
};
</script>
