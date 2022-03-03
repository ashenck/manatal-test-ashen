<template>
  <v-app-bar app flat color="white" elevation="1">
    <div class="d-flex align-center">
      <h1 class="font-weight-black"><i>NEWS</i></h1>
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
