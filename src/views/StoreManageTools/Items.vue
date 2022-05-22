<template>
  <div class="items">
    <v-card elevation="0">
      <v-card-title>{{ $t('__items_title') }}</v-card-title>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { userAPI } from "@/plugins/service"

export default {
  name: 'Items',
  computed: {
    ...mapGetters({
      userID: 'user/uid'
    })
  },
  data() {
    return {
      storeIDs: [],
      stores: {}
    }
  },
  methods: {
    loadStores() {
      this.$store.dispatch('setIsLoading', true)
      this.$store.dispatch('user/getUserIDToken')
      .then(idToken => {
        return userAPI.getUserStores(idToken, this.userID)
      })
      .then(result => {
        this.$store.dispatch('setIsLoading', false)
        this.storeIDs = result['store_ids']
        this.stores = result['stores']
        console.log(this.storeIDs)
        console.log(this.stores)
      })
      .catch(err => {
        console.error(err)
        this.$store.dispatch('setIsLoading', false)
        this.$router.replace({ name: "Home" })
      })
    }
  },
  created() {
    this.loadStores()
  }
}
</script>
