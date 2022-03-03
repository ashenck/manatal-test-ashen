<template>
  <v-app-bar app flat color="white">
    <div class="d-flex align-center">
      <h2><i>NEWS</i></h2>
    </div>

    <v-spacer></v-spacer>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          color="white" to="/"
          elevation="2" fab light small
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark> mdi-home </v-icon>
        </v-btn>
      </template>
      <span>Home</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          color="white"
          elevation="2" fab light small
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark> mdi-history </v-icon>
        </v-btn>
      </template>
      <span>History</span>
    </v-tooltip>
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
