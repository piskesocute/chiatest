import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0071bc',
        // accent: '#e91e63',
        // secondary: '#30b1dc',
        // success: '#4CAF50',
        // info: '#2196F3',
        // warning: '#FB8C00',
        // error: '#FF5252'

      },
      dark: {
        primary: '#0071bc',
        // accent: '#e91e63',
        // secondary: '#30b1dc',
        // success: '#4CAF50',
        // info: '#2196F3',
        // warning: '#FB8C00',
        // error: '#FF5252'
      }
    }
  },
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  breakpoint: {
    mobileBreakpoint: 'xs' // xs: <600px
  },
});
