import React from 'react';
import classnames from 'classnames'
import styles from './styles.sass'

const Loading = (props) => {

  return (
    <div className={ styles.loading }>
      <div className={ styles.spinner }>
        <div className={ styles.rect1 } />
        <div className={ styles.rect2 } />
        <div className={ styles.rect3 } />
        <div className={ styles.rect4 } />
        <div className={ styles.rect5 } />
      </div>
    </div>
  );
};

export default Loading;