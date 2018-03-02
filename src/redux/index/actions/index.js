import * as actionTypes from './ActionTypes'

import * as shortcut from './shortcut'
import * as loginInfo from './loginInfo'

export const exampleWelcome = (name) => ({
  type: actionTypes.EXAMPLE_WELCOME,
  name
})
export const shortcutActions = shortcut
export const loginInfoActions = loginInfo
