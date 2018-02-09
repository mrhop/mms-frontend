/**
 * Created by Donghui Huo on 2018/2/2.
 */
import React from 'react';
import PropTypes from 'prop-types'

import {
  Route,
  Link
} from 'react-router-dom'
const OldSchoolMenuLink = ({label, to, activeOnlyWhenExact}) => (
  <Route path={to} exact={activeOnlyWhenExact}>
    {({match}) => (
      <div className={match ? 'active' : ''}>
        {match ? '> ' : ''}<Link to={to}>{label}</Link>
      </div>
    )}
  </Route>
)
OldSchoolMenuLink.propTypes = {
  activeOnlyWhenExact: PropTypes.bool,
  label: PropTypes.string,
  to: PropTypes.string
}
export default OldSchoolMenuLink
