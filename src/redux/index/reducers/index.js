import locationChange from './locationChange'
import shortcut from './shortcut'
import loginInfo from './loginInfo'
import leftMenu from './leftMenu'
import indexData from './indexData'
import accessControlData from './accessControl'

const indexApp = {
  locationChange,
  shortcut,
  loginInfo,
  leftMenu,
  indexData,
  ...accessControlData
}

export default indexApp
