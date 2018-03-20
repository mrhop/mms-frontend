import locationChange from './locationChange'
import shortcut from './shortcut'
import loginInfo from './loginInfo'
import leftMenu from './leftMenu'
import indexData from './indexData'
import options from './options'
import accessControlData from './accessControl'
import systemInfoData from './systemInfo'
import baseDataData from './baseData'

const indexApp = {
  locationChange,
  shortcut,
  loginInfo,
  leftMenu,
  indexData,
  ...options,
  ...accessControlData,
  ...systemInfoData,
  ...baseDataData
}

export default indexApp
