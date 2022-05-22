<template>
  <div class="footer">
    <v-footer app dark>
      <template v-if="!userIsSignIn">
        <v-spacer/>
        <div class="clickable"
          v-on:click="toSignIn">
          {{ $t('__sign_in') }}
        </div>
      </template>
      <template v-else>
        <v-spacer/>
        <div class="">{{ userName }}</div>
        <div class="clickable footertext"
          v-on:click="signOut">
          {{ $t('__sign_out') }}
        </div>
      </template>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'Footer',
  computed: {
    ...mapGetters({
      userIsSignIn: "user/isSignIn",
      userName: "user/name",
    })
  },
  methods: {
    toSignIn() {
      if (this.$route.name !== 'SignIn') {
        this.$router.push({ name: 'SignIn', query: { redirect: this.$route.fullPath } })
      }
    },
    signOut() {
      this.$store.dispatch('user/signOut')
      .then(() => {
        if (this.$route.meta.requiresAuth) {
          this.$router.replace({ name: 'Home' })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.footer {
  &__user_item {
    margin-left: 8px;
    text-decoration: underline;
  }
}
.clickable {
  cursor: pointer;
}
.footertext {
  margin-left: 20px;
}
</style>
