<template>
  <div>
    <v-combobox
      :value="selectedSource && selectedSource.text ? selectedSource.text : ''"
      :items="sources"
      label="Filter By Source"
      clearable
      outlined
      dense
      hide-details
      @change="updateSourceID"
    ></v-combobox>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

import services from '../../services/index';

export default {
  name: 'FiltersSource',
  data: () => ({
    selectedFilter: '',
  }),
  computed: {
    ...mapGetters({ sources: 'sources', selectedSource: 'selectedSource' }),
  },
  created() {
    if (this.sources.length === 0) {
      this.fetchFilterSources();
    }
  },
  methods: {
    ...mapActions({ filterBySource: 'filterBySource' }),
    ...mapMutations({ setSources: 'setSources' }),
    updateSearch(e) {
      this.searchTrigger(e.target.value);
    },
    async fetchFilterSources() {
      try {
        const result = await services.newsService.listSources();
        const resultSources = result?.data?.sources ? result.data.sources : [];
        resultSources.forEach((element) => {
          // eslint-disable-next-line no-param-reassign
          element.text = element.name;
          // eslint-disable-next-line no-param-reassign
          element.value = element.id;
        });
        this.setSources(resultSources);
      } catch (error) {
        this.setSources([]);
      }
    },
    updateSourceID(e) {
      this.filterBySource(e);
    },
  },
};
</script>
