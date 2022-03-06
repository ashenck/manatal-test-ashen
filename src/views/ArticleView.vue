<template>
  <v-container>
    <div>
      <v-breadcrumbs :items="items" class="pa-0 py-2 warning--text">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <h2>{{ article && article.title }}</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <v-img
            v-if="article.urlToImage"
            :src="article.urlToImage"
            class="mb-2 rounded-lg"
          >
          </v-img>
          <v-img
            v-if="!article.urlToImage"
            src="@/assets/newsPlaceholder.png"
            class=""
            height="250px"
          >
          </v-img>
          <h5 v-if="article && article.author">
            Author : <span class="font-weight-light">{{ article.author }}</span>
          </h5>
          <h5 v-if="formattedDate">
            Date : <span class="font-weight-light">{{ formattedDate }}</span>
          </h5>
          <v-chip outlined class="my-1" v-if="article && article.source && article.source.name">
            <v-avatar left>
              <v-icon>mdi-semantic-web</v-icon>
            </v-avatar>
            {{ article.source.name }}
          </v-chip>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <p class="text-justify pt-0 mb-2">
            {{ article.description }}
          </p>
          <p class="text-justify pt-2 mb-2">
            {{ article.content }}
          </p>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex';
import shared from '../shared';

export default {
  name: 'ArticleView',
  data: () => ({
    formattedDate: '',
    items: [
      {
        text: 'Home',
        disabled: false,
        to: '/',
      },
      {
        text: 'Article',
        disabled: true,
        href: '',
      },
    ],
  }),
  async created() {
    this.dateFormatter();
  },
  computed: {
    ...mapGetters({ article: 'article' }),
  },
  methods: {
    dateFormatter() {
      const publishedAt = this.article && this.article.publishedAt ? this.article.publishedAt : '';
      const date = shared.format_date(publishedAt);
      if (date !== 'Invalid date') {
        this.formattedDate = date;
      } else {
        this.formattedDate = '';
      }
    },
  },
};
</script>
