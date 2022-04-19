import { App } from 'vue'
import { VPTheme } from '@vue/theme'
// import Banner from './components/Banner.vue'
// import PreferenceSwitch from './components/PreferenceSwitch.vue'
// import VueSchoolLink from './components/VueSchoolLink.vue'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'
// import SponsorsAside from './components/SponsorsAside.vue'
// import VueJobs from './components/VueJobs.vue'

import tyhUi from 'tyh-ui2'
import 'tyh-ui2/style/index.css'

export default Object.assign({}, VPTheme, {
  // Layout: () => {
  //   // @ts-ignore
  //   return h(VPTheme.Layout, null, {
  //     banner: () => h(Banner),
  //     'sidebar-top': () => h(PreferenceSwitch),
  //     'aside-mid': () => h(SponsorsAside),
  //     'aside-bottom': () => h(VueJobs)
  //   })
  // },
  enhanceApp({ app }: { app: App }) {
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    // app.component('VueSchoolLink', VueSchoolLink)
    app.use(tyhUi)
  }
})
