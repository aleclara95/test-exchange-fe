import React from 'react';

import './MainScreen.scss';

import { Card } from 'semantic-ui-react';


const mainscreen = (props) => (
  <div className='main-screen'>
    <Card>
      <Card.Content>
        <Card.Description>
          <p>MAIN SCREEN</p>
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default mainscreen;
