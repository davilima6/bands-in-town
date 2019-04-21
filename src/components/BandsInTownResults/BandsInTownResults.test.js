import React from 'react';
import { shallow } from 'enzyme';
import BandsInTownResults from './BandsInTownResults';

describe('BandsInTownResults', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BandsInTownResults />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());
});
