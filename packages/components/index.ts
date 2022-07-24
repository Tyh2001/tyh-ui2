import { App } from 'vue'
import TyhButton from './button'
import TyhList from './list'
import TyhCard from './card'
import TyhTag from './tag'
import TyhLink from './link'
import TyhMenu from './menu'
import TyhMenuItem from './menu-item'
import TyhDivision from './division'
import TyhIcon from './icon'
import TyhCrumbs from './crumbs'
import TyhCrumbsItem from './crumbs-item'
import TyhInput from './input'
import TyhBackTop from './back-top'
import TyhSkeleton from './skeleton'
import TyhAlert from './alert'
import TyhRate from './rate'
import TyhImage from './image'
import TyhAvatar from './avatar'
import TyhAside from './aside'
import TyhContainer from './container'
import TyhFooter from './footer'
import TyhHeader from './header'
import TyhMain from './main'
import TyhText from './text'
import TyhTable from './table'
import TyhButtonGroup from './button-group'
import TyhCalendar from './calendar'
import TyhSwitch from './switch'
import TyhRadio from './radio'
import TyhTree from './tree'
import TyhPageHeader from './page-header'
import TyhInfo from './info'
import TyhTextarea from './textarea'
import TyhSelect from './select'
import TyhOption from './option'
import TyhTagging from './tagging'
import TyhDrawer from './drawer'
import TyhDialog from './dialog'
import TyhCollapse from './collapse'
import TyhCollapseItem from './collapse-item'
import { Message } from './message'
import { Notification } from './notification'

const components = {
  TyhButton,
  TyhList,
  TyhCard,
  TyhTag,
  TyhLink,
  TyhMenu,
  TyhMenuItem,
  TyhDivision,
  TyhIcon,
  TyhCrumbs,
  TyhCrumbsItem,
  TyhInput,
  TyhBackTop,
  TyhSkeleton,
  TyhAlert,
  TyhRate,
  TyhImage,
  TyhAvatar,
  TyhAside,
  TyhContainer,
  TyhFooter,
  TyhHeader,
  TyhMain,
  TyhText,
  TyhTable,
  TyhButtonGroup,
  TyhCalendar,
  TyhSwitch,
  TyhRadio,
  TyhTree,
  TyhPageHeader,
  TyhInfo,
  TyhTextarea,
  TyhSelect,
  TyhOption,
  TyhTagging,
  TyhDrawer,
  TyhDialog,
  TyhCollapse,
  TyhCollapseItem
}

const install = (app: App): void => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
}

export {
  Message,
  Notification,
  TyhButton,
  TyhList,
  TyhCard,
  TyhTag,
  TyhLink,
  TyhMenu,
  TyhMenuItem,
  TyhDivision,
  TyhIcon,
  TyhCrumbs,
  TyhCrumbsItem,
  TyhInput,
  TyhBackTop,
  TyhSkeleton,
  TyhAlert,
  TyhRate,
  TyhImage,
  TyhAvatar,
  TyhAside,
  TyhContainer,
  TyhFooter,
  TyhHeader,
  TyhMain,
  TyhText,
  TyhTable,
  TyhButtonGroup,
  TyhCalendar,
  TyhSwitch,
  TyhRadio,
  TyhTree,
  TyhPageHeader,
  TyhInfo,
  TyhTextarea,
  TyhSelect,
  TyhOption,
  TyhTagging,
  TyhDrawer,
  TyhDialog,
  TyhCollapse,
  TyhCollapseItem
}

export default {
  install,
  ...components
}
