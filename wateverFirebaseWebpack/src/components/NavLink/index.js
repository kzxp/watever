import React from 'react'
import { Link } from 'react-router'
// import styles from './styles.sass'

const NavLink = (props) => (<Link {...props} activeClassName={props.activeClassName}/>);

export default NavLink;
