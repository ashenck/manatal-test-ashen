<template>
  <div>
    <v-card-actions class="pa-0">
      <v-chip
        outlined
        class="my-2"
        v-if="articleData && articleData.source && articleData.source.name"
      >
        <v-avatar left>
          <v-icon>mdi-semantic-web</v-icon>
        </v-avatar>
        {{ articleData.source.name }}
      </v-chip>
      <v-spacer></v-spacer>

      <v-btn icon small @click="(dialog = true), (headline = articleData.title)">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn text color="warning" @click="pushToArticle(articleData)">
        <span class="mr-1">Read More</span>
        <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
      </v-btn>
    </v-card-actions>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Edit Article</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    counter
                    label="Headline"
                    :rules="rules"
                    v-model="headline"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"> Close </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="updateHeadline"
              :disabled="headline.length >= 255"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'NewsCardToolBar',
  components: {},
  props: {
    articleData: Object,
    index: Number,
  },
  created() {},
  data: () => ({
    formattedDate: '',
    dialog: false,
    headline: '',
    articleIndex: null,
    rules: [(v) => v.length <= 255 || 'Max 255 characters'],
  }),
  methods: {
    ...mapActions({ pushToArticle: 'pushToArticle' }),
    ...mapMutations({ setArticleHeadline: 'setArticleHeadline' }),
    updateHeadline() {
      this.setArticleHeadline({ headline: this.headline, index: this.index });
      this.dialog = false;
    },
  },
};
</script>
