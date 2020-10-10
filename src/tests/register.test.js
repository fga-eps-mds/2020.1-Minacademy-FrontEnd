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
  wrapper.find('Button').simulate('click')
})

it('Expect to click name input', () => {
  const wrapper = shallow(<Register store={store}/>);
  const input = wrapper.find('input').at(0).simulate('change', { target: { name: 'name' } })
  expect(input.props().name).toEqual('name');
})

it('Expect to click email input', () => {
  const wrapper = shallow(<Register store={store} />);
  const input = wrapper.find('input').at(1).simulate('change', { target: { name: 'email' } })
  expect(input.props().name).toEqual('email');
})

it('Expect to click password input', () => {
  const wrapper = shallow(<Register store={store}/>);
  const input = wrapper.find('input').at(2).simulate('change', { target: { name: 'password' } })
  expect(input.props().name).toEqual('password');
})