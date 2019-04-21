import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import BandsInTownInput from './BandsInTownInput';

describe('BandsInTownInput', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BandsInTownInput />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());
});
