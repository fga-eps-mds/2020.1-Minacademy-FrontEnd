import { shallow } from 'enzyme';
import React from 'react';
import Login from '../views/Login';
import 'mutationobserver-shim';
import { store } from '../store'

global.MutationObserver = window.MutationObserver;

it('Expect to render Login Component', () => {
  expect(shallow(<Login store={store}></Login>).length).toEqual(1)
})