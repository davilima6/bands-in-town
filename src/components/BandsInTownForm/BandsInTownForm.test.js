import React from 'react';
import { shallow } from 'enzyme';
import BandsInTownForm from './BandsInTownForm';

describe('BandsInTownForm', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BandsInTownForm />);
  });

  test('renders without crashing', () => expect(component).toBeDefined());
});
