import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
      <Fragment>
          <header className={classes.header}>
              <h1 className={classes.logo}>GreatQuote</h1>
              <nav className={classes.nav}>
                  <ul>
                  <li> <NavLink activeClassName={classes.active} to="/quotes">All Quotes</NavLink></li>
                   <li><NavLink activeClassName={classes.active} to="/new-quote">Add a quote</NavLink></li>
                  </ul>
              </nav>
          </header>
    </Fragment>
  )
}

export default MainNavigation