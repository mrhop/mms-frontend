import locationChange from './locationChange'
import shortcut from './shortcut'
import loginInfo from './loginInfo'
import leftMenu from './leftMenu'
import indexData from './indexData'
import opeartions from './opeartions'
import accessControlData from './accessControl'

const indexApp = {
  locationChange,
  shortcut,
  loginInfo,
  leftMenu,
  indexData,
  ...opeartions,
  ...accessControlData
}

export default indexApp
