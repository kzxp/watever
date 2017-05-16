import React from 'react';

const error404 = () => {

  const styles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom:0,
    fontSize: '30px'
  }

  return (
    <div styles={styles}>
      404 not found
    </div>
  );
};

export default error404;