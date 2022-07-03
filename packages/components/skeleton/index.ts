import TyhSkeleton from './src/skeleton.vue'

TyhSkeleton.install = (app: any) => {
  app.component(TyhSkeleton.name, TyhSkeleton)
}

export default TyhSkeleton
