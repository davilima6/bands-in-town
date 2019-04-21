import React from 'react';
import ReactDOM from 'react-dom';
import BandsInTownApp from './BandsInTownApp';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BandsInTownApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
