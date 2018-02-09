/**
 * Created by Donghui Huo on 2018/2/2.
 */
/* eslint-disable */
import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {
  NavLink,
  Switch,
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import './AnimationExample.css'
import Test1 from './Test1'
import Test2 from './Test2'
const AnimationExample = ({location}) => {
  return (
    <div style={{position: 'absolute', left: '400px'}}>
      <Route exact path="/color" render={() => (
          <Redirect to="/color/10/90/50"/>
        )}/>
      <div>
        <nav>
          <ul>
            <NavLink activeStyle={{color: 'red'}} to="/color/10/90/50">com1</NavLink>
            <NavLink activeStyle={{color: 'green'}} to="/color/120/100/40">com2</NavLink>
            <NavLink activeStyle={{color: 'blue'}} to="/color/200/100/40">com2</NavLink>
            <NavLink activeStyle={{color: 'pink'}} to="/color/310/100/50">com2</NavLink>
          </ul>
        </nav>
      </div>
      <div>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="example" timeout={{enter: 500, exit: 300}}>
            <div key={location.pathname}
                 style={{position: 'absolute', width: '200px', background: 'white', height: '100px'}}>
              <Route
                location={location}
                key={location.key}
                path="/color/:h/:s/:l"
                component={HSL}
              />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}


const HSL = ({match: {params}}) => (
  <div style={{
    ...styles.fill,
    ...styles.hsl,
    background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
  }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
)

const styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

styles.hsl = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}

export default AnimationExample
