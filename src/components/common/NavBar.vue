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
      <SeachBar class="mt-1 d-none d-sm-flex" />
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-btn class="mx-0 d-none d-sm-flex" text to="/">
        <v-icon dark> mdi-home </v-icon> <span>Home</span>
      </v-btn>
      <v-btn @click="dialog = true" class="ml-1 d-none d-sm-flex" text>
        <v-icon class="mr-1" dark> mdi-history </v-icon> <span>History</span>
      </v-btn>
      <v-btn @click="errorFetch" class="ml-1 d-none d-sm-flex" text>
        <v-icon class="mr-1" dark> mdi-alert </v-icon> <span>Error</span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-orange--text text--accent-4">
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
            <v-list-item-title @click="dialog = true"
              ><h3>
                <v-icon class="mx-1 black--text" dark> mdi-history </v-icon
                ><span class="pt-3">History</span>
              </h3>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="snackbar = true"
              ><h3>
                <v-icon class="mx-1 black--text" dark> mdi-alert </v-icon
                ><span class="pt-3">Error</span>
              </h3>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-dialog v-model="dialog" scrollable max-width="300px">
      <v-card>
        <v-card-title>History</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-0 ma-0" style="height: 300px">
          <v-list three-line>
            <h3 v-if="history.length == 0" class="text-center">No History Data!</h3>
            <template v-for="(item, index) in history">
              <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

              <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

              <v-list-item v-else :key="item.title">
                <v-list-item-avatar tile>
                  <v-img :src="item.urlToImage"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider v-if="history.length - 1 != index" :key="item.header"></v-divider>
            </template>
          </v-list>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" color="red" right bottom>
      {{ errorText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import SeachBar from './SearchBar.vue';

import services from '../../services/index';

export default {
  name: 'NavBar',
  components: {
    SeachBar,
  },
  data: () => ({
    drawer: false,
    dialogm1: '',
    dialog: false,
    snackbar: false,
    errorText: 'Somthing Went Wrong!',
  }),
  computed: {
    ...mapGetters({ history: 'history' }),
  },
  methods: {
    async errorFetch() {
      try {
        const result = await services.newsService.errorEndPoint();
        console.log(result);
      } catch (error) {
        this.snackbar = true;
      }
    },
  },
};
</script>
