<template>
  <div>
    <v-text-field
      label="Search"
      outlined
      dense
      hide-details
      :value="searchTxt"
      @keyup="updateSearch"
    ></v-text-field>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchBar',
  data: () => ({
    search: '',
  }),
  computed: {
    ...mapGetters({ searchTxt: 'searchTxt' }),
  },
  methods: {
    ...mapActions({ searchTrigger: 'searchTrigger' }),
    updateSearch(e) {
      this.searchTrigger(e.target.value);
    },
  },
};
</script>
