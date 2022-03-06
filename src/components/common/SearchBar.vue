<template>
  <div>
    <v-text-field
            label="Search"
            outlined
            dense
            v-model="search"
            @keyup="searchTrigger(search)"
          ></v-text-field>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchBar',
  data: () => ({
    search: '',
  }),
  methods: {
    ...mapActions({ searchTrigger: 'searchTrigger' }),
  },
};
</script>
