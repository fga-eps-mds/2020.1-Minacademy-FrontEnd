import { shallow } from 'enzyme';
import React from 'react';
import Dropdown from '../components/Dropdown';
import { store } from '../store';

it('Expect to render Dropdown component', () => {
  expect(shallow(<Dropdown store={store} items={[{ _id: "9999", title: "teste"}]}></Dropdown>).length).toEqual(1)
})