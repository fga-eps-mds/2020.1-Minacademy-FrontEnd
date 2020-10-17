import { shallow } from 'enzyme';
import React from 'react';
import Register from '../views/Register';
import 'mutationobserver-shim';
import { store } from '../store'

global.MutationObserver = window.MutationObserver;

it('Expect to render Register Component', () => {
  expect(shallow(<Register store={store} />).length).toEqual(1)
})

it('Expect to click button', () => {
  const wrapper = shallow(<Register store={store} />);
  wrapper.dive('Button').simulate('click');
})

it('Expect to click name input', () => {
  const wrapper = shallow(<Register store={store}/>);
  wrapper.dive('input').simulate('change', { target: { name: 'name' } })
})

it('Expect to click email input', () => {
  const wrapper = shallow(<Register store={store} />);
  wrapper.dive('input').simulate('change', { target: { name: 'email' } })
})

it('Expect to click password input', () => {
  const wrapper = shallow(<Register store={store}/>);
  wrapper.dive('input').simulate('change', { target: { name: 'password' } })
})