import React from 'react';

import './Layout.scss';

const layout = props => (
  <React.Fragment>
    <main className='layout'>{props.children}</main>
  </React.Fragment>
);

export default layout;
