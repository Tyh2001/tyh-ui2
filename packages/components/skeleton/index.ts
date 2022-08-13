import TyhSkeleton from './src/skeleton.vue'
import type { App } from 'vue'

TyhSkeleton.install = (app: App) => {
  app.component(TyhSkeleton.name, TyhSkeleton)
}

export default TyhSkeleton
