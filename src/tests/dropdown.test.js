import { shallow } from 'enzyme';
import React from 'react';
import Dropdown from '../components/Dropdown';

it('Expect to render Dropdown component', () => {
  expect(shallow(<Dropdown></Dropdown>).length).toEqual(1)
})