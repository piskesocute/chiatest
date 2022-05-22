<template>
  <div class="app-bar">
    <v-app-bar app clipped-left color="primary" dark>
      <v-app-bar-nav-icon v-if="isSignIn && isMobile" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-spacer v-if="!isMobile"/>
      <router-link :to="{ name: 'Home' }" class="d-flex align-center logo-router-link">
        <v-img
          alt="Logo"
          class="shrink mr-4"
          contain
          src="../assets/logo.svg"
          transition="scale-transition"
          width="36"/>
        <v-toolbar-title class="headline">
          {{ $t("__title") }}
        </v-toolbar-title>
      </router-link>
      <v-spacer v-if="!isMobile"/>
    </v-app-bar>

    <v-navigation-drawer v-if="isSignIn"
      v-model="drawer"
      :absolute="isMobile"
      :temporary="isMobile"
      :permanent="!isMobile"
      :app="!isMobile"
      :clipped="!isMobile">
      <v-list nav dense>
        <v-list-group v-for="(item, i) in items" :key="i"
          no-action
          :prepend-icon="item.icon">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="(subItem, subI) in item.childs" :key="`${i}-${subI}`" :to="subItem.to">
            <v-list-item-icon v-if="subItem.icon"><v-icon>{{ subItem.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ subItem.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'AppBar',
  computed: {
    ...mapGetters({
      isMobile: 'isMobile',
      isSignIn: 'user/isSignIn',
    })
  },
  data() {
    return {
      drawer: false,
      items: [
        { title: this.$t('__storemanagetools_title'), icon: 'mdi-store',
          childs: [
            { title: this.$t('__items_title'), to: { name: 'Items' } },
          ]
        }
      ]
    }
  },
}
</script>

<style scoped>
@media screen and (min-width: 1000px){
  .logo-router-link {
    color: inherit;
    text-decoration: inherit;
  }
}

@media screen and (max-width: 999px) and (min-width: 600px){
  .v-application .headline {
    color: #fff;
  }
}

@media screen and (max-width: 599px){
  .spacer {
    flex-grow: 0!important;
  }
  .v-application .headline {
    font-size: 16px!important;
    color: #fff;
  }
  .v-application .mr-4 {
    margin-right: 0px!important;
  }
}
</style>