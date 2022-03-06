<template>
  <div>
    <v-app-bar app flat color="white" elevation="1">
      <div class="d-flex align-center">
        <router-link class="text-decoration-none mr-3" to="/">
          <h1 class="font-weight-bold black--text">
            NEWS<span class="deep-orange--text font-weight-bold">APP</span>
          </h1></router-link
        >
      </div>
      <SeachBar class="mt-6 d-none d-sm-flex" />
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-btn class="mx-0 d-none d-sm-flex" text to="/">
        <v-icon dark> mdi-home </v-icon> <v-span>Home</v-span>
      </v-btn>
      <v-btn class="ml-1 d-none d-sm-flex" text>
        <v-icon class="mr-1" dark> mdi-history </v-icon> <span>History</span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-orange--text text--accent-4">
          <v-list-item>
            <v-list-item-title
              ><router-link to="/" class="text-decoration-none black--text"
                ><h3>
                  <v-icon class="mx-1 black--text" dark> mdi-home </v-icon
                  ><span class="pt-3">Home</span>
                </h3>
              </router-link></v-list-item-title
            >
          </v-list-item>

           <v-list-item>
            <v-list-item-title
              ><router-link to="/" class="text-decoration-none black--text"
                ><h3>
                  <v-icon class="mx-1 black--text" dark> mdi-history </v-icon
                  ><span class="pt-3">History</span>
                </h3>
              </router-link></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import SeachBar from './SearchBar.vue';

export default {
  name: 'NavBar',
  components: {
    SeachBar,
  },
  data: () => ({
    drawer: false,
    //
  }),
};
</script>
