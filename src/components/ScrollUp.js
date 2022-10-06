import { IconButton } from '@material-ui/core';
import { ArrowUpwardOutlined } from '@material-ui/icons';
import React from 'react';
import ScrollToTop from 'react-scroll-up';

const ScrollTop = () => {
  return (
    <ScrollToTop showUnder={3000} easing="easeInQuint">
      <IconButton size="large" style={{ background: '#4df4bc' }}>
        <ArrowUpwardOutlined />
      </IconButton>
    </ScrollToTop>
  );
};

export default ScrollTop;
