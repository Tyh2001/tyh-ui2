import { defineClientAppEnhance } from '@vitepress/client'
import tyhUi from 'tyh-ui2'
import 'tyh-ui2/style/index.css'

export default defineClientAppEnhance(({ app }) => {
  app.use(tyhUi)
})
