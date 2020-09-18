import { shallow } from 'enzyme';
import React from 'react';
import Header from '../components/Header';

it('Expect to render Dropdown component', () => {
  expect(shallow(<Header></Header>).length).toEqual(1)
})