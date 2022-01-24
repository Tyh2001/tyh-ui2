import TyhButton from '../packages/button'
import TyhList from '../packages/list'
import TyhCard from '../packages/card'
import TyhTag from '../packages/tag'
import TyhLink from '../packages/link'
import TyhMenu from '../packages/menu'
import TyhMenuItem from '../packages/menu-item'
import TyhDivision from '../packages/division'
import TyhIcon from '../packages/icon'
import TyhCrumbs from '../packages/crumbs'
import TyhCrumbsItem from '../packages/crumbs-item'
import TyhInput from '../packages/input'
import TyhTurnPage from '../packages/turn-page'
import TyhTurnPageItem from '../packages/turn-page-item'
import TyhBackTop from '../packages/back-top'
import TyhSkeleton from '../packages/skeleton'
import TyhAlert from '../packages/alert'
import TyhRate from '../packages/rate'
import TyhImage from '../packages/image'
import TyhAvatar from '../packages/avatar'
import TyhAside from '../packages/container/TyhAside'
import TyhContainer from '../packages/container/TyhContainer'
import TyhFooter from '../packages/container/TyhFooter'
import TyhHeader from '../packages/container/TyhHeader'
import TyhMain from '../packages/container/TyhMain'
import TyhText from '../packages/text'
import TyhTable from '../packages/table'
import TyhButtonGroup from '../packages/button-group'
import TyhCalendar from '../packages/calendar'
import TyhSwitch from '../packages/switch'

const components = [
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
  TyhTurnPage,
  TyhTurnPageItem,
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
  TyhSwitch
]

const install = app => {
  components.forEach(i => {
    app.use(i)
  })
}

const tyhUi = {
  version: "3.0.0",
  install
}

export {
  install,
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
  TyhTurnPage,
  TyhTurnPageItem,
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
  TyhSwitch
}

export default tyhUi
