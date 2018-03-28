import locationChange from './locationChange'
import shortcut from './shortcut'
import loginInfo from './loginInfo'
import leftMenu from './leftMenu'
import indexData from './indexData'
import options from './options'
import accessControl from './accessControl'
import systemInfo from './systemInfo'
import baseData from './baseData'
import purchase from "./purchase";

const indexApp = {
  locationChange,
  shortcut,
  loginInfo,
  leftMenu,
  indexData,
  ...options,
  ...accessControl,
  ...systemInfo,
  ...baseData,
  ...purchase
}

export default indexApp
