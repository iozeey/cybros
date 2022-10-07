import { IconButton } from '@material-ui/core';
import { Facebook, LinkedIn } from '@material-ui/icons';
import React from 'react';

const SocialLinks = () => {
  return (
    <div>
      <IconButton href="https://www.facebook.com/cybros.dev">
        <Facebook />
      </IconButton>
      {/* <IconButton>
        <Twitter />
      </IconButton> */}
      <IconButton href="https://www.linkedin.com/company/cybros-dev">
        <LinkedIn />
      </IconButton>
    </div>
  );
};

export default SocialLinks;
