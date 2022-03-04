<template>
  <v-footer padless>
    <v-col
      class="text-center lighten-5"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>NEWSAPP</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterBar',

  data: () => ({
    //
  }),
};
</script>
