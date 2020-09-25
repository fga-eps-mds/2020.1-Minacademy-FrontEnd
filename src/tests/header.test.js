import { shallow } from 'enzyme';
import React from 'react';
import Header from '../components/Header';
import { store } from '../store';

it('Expect to render Header component', () => {
  expect(shallow(<Header store={store}></Header>).length).toEqual(1)
})