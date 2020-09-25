import { shallow } from 'enzyme';
import React from 'react';
import Dropdown from '../components/Dropdown';
import { store } from '../store';

it('Expect to render Dropdown component', () => {
  expect(shallow(<Dropdown store={store}></Dropdown>).length).toEqual(1)
})