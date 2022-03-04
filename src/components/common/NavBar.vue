<template>
  <v-app-bar app flat color="white" elevation="1">
    <div class="d-flex align-center">
      <router-link class="text-decoration-none" to="/">
      <h1 class="font-weight-bold black--text"
      >NEWS<span class="deep-orange--text font-weight-bold">APP</span></h1></router-link>
    </div>

    <v-spacer></v-spacer>
    <v-btn class="mx-0" text  to="/">
      <v-icon dark> mdi-home </v-icon> <span class="d-none d-sm-flex">Home</span>
    </v-btn>
    <v-btn class="ml-1" text>
      <v-icon class="mr-1" dark> mdi-history </v-icon> <span class="d-none d-sm-flex">History</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',

  data: () => ({
    //
  }),
};
</script>
