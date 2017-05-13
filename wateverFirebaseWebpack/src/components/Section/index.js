import React from 'react';
import classnames from 'classnames'
import styles from './styles.sass'

const Section = (props) => {

  const appBody = classnames(styles["section"], "section") 

  return (
    <div className={ appBody }>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};

export default Section;