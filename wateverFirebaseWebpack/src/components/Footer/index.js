import React from 'react';
import styles from './styles.sass'

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      {props.children}
    </div>
  );
};

export default Footer;