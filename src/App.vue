<template>
  <v-app>
    <AppBar/>
    
    <v-main>
      <router-view/>
    </v-main>

    <Footer/>

    <loading-overlay
      :active.sync="isLoading"
      loader="dots"/>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { mapGetters } from "vuex"

export default {
  name: 'App',
  components: {
    AppBar,
    Footer
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
    })
  },
  watch: {
    '$vuetify.breakpoint.mobile': {
      immediate: true,
      handler(val) {
        this.$store.dispatch('setIsMobile', val);
      }
    }
  },
  created() {
    document.title = this.$t("__title");
  }
};
</script>
