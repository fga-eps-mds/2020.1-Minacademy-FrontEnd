import { shallow } from 'enzyme';
import React from 'react';
import Home from '../views/Home';

it('Expect to render Home component', () => {
  expect(shallow(<Home></Home>).length).toEqual(1)
})