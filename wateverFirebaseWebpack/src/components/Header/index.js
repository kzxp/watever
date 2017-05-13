import React from 'react';
import NavLink from 'components/NavLink';
import styles from './styles.sass';
import classnames from 'classnames';

const header = (props) => {

  const appNav = classnames( styles["App-nav"], "nav", "has-shadow", "nav-center" );
  const navItem = classnames( "nav-item", styles["nav-item"] )

  return (
    <header className={ styles["App-header"] }>
      <nav className={ appNav }>
        { 
          props.routes.map((route) =>
            <NavLink
              className={ navItem }
              to={'/' + route.path}
              key={'NavLink' + route.path}
              activeClassName={ styles["is-active"] }>{route.path}</NavLink>
        )}
      </nav>
    </header>
  );
};

export default header;