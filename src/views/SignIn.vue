<template>
  <v-app id="app">
    <div id="main">
      <v-card id="signinCard"
        max-width="500px"
        outlined
        elevation="15"
      >
          
        <v-toolbar
          flat
          color="#246dd4"
        >
          <v-icon id="signinIcon">mdi-account-arrow-left</v-icon>
          <v-toolbar-title id="signinToolbarTitle">{{ $t('__sign_in') }}</v-toolbar-title>
        </v-toolbar>

        <v-card-text class="pa-6">
          <v-form
            ref="form"
            v-model="valid">
            <div class="signinCardTextIcon"><v-icon>mdi-email</v-icon></div>
            <div class="signinTextField">{{ $t('__email_address') }}</div>
            <v-text-field
              dense
              v-model="form.email"
              type="email"
              :rules="[ requiredRule, emailRule ]"
              required/>
            <div class="signinCardTextIcon"><v-icon>mdi-lock</v-icon></div>
            <div class="signinTextField">{{ $t('__password') }}</div>
            <v-text-field
              dense
              v-model="form.password"
              type="password"
              :rules="[ requiredRule ]"
              required/>
            <div class="caption mb-2 error--text">{{ error }}</div>
          </v-form>
          
          <v-btn
            block
            color="primary"
            class="mr-5 mb-2"
            @click="signIn">
            {{ $t("__sign_in") }}
          </v-btn>
        </v-card-text>       
      </v-card>
    </div>
  </v-app> 
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      valid: false,
      error: '',
      requiredRule: v => !!v || this.$t('__required'),
      emailRule: v => /.+@.+\..+/.test(v) || this.$t('__email_address_invalid')
    }
  },
  methods: {
    signIn() {
      this.$refs.form.validate()
      if (this.valid) {
        this.$store.dispatch('setIsLoading', true)
        this.$store.dispatch('user/signInWithEmailAndPassword', {
          email: this.form.email,
          password: this.form.password
        })
        .catch(err => {
          this.$store.dispatch('setIsLoading', false)
          const errCode = err.code
          const errMessage = err.message
          let errorMessage = ''
          if (errCode) {
            const tKey = `__firebase_error_${errCode}`
            errorMessage = this.$t(tKey)
            if (errorMessage === tKey) {
              if (errMessage) {
                errorMessage = errMessage
              } else {
                errorMessage = errCode
              }
            }
          } else if (errMessage) {
            errorMessage = errMessage
          } else {
            errorMessage = err
          }
          this.error = errorMessage
        })
      }
    },
  },
  watch: {
    '$store.state.user.data': {
      immediate: true,
      handler(val) {
        if (val) {
          this.$store.dispatch('setIsLoading', false)
          if (this.$route.query.redirect) {
            this.$router.replace(this.$route.query.redirect)
          } else {
            this.$router.replace({ name: 'Home' })
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
#app {  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#main {//background-color: antiquewhite;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;

}
#signinCard { //background-color: antiquewhite;
  margin: 0 auto;
}

#signinToolbarTitle {
  color: #fff;
  padding-left: 10px;
}

#signinIcon {
  color: #fff;
}
.signinCardTextIcon {//background-color: aquamarine;
  display: inline-block;
}
.signinTextField {//background-color: rgb(233, 235, 141);
  display: inline-block;
  margin-left: 10px;
  width: 410px;
}

</style>
