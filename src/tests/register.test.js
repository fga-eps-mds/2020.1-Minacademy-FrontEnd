import { shallow } from 'enzyme';
import React from 'react';
import Register from '../views/Register';
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

it('Expect to render Login Component', () => {
  expect(shallow(<Register></Register>).length).toEqual(1)
  expect(shallow(<Register></Register>)).toMatchSnapshot()
})

it('Expect to click button', () => {
  const wrapper = shallow(<Register />);
  wrapper.find('Button').simulate('click')
})

it('Expect to click input', () => {
    const wrapper = shallow(<Register />);
    const input = wrapper.find('input').at(0).simulate('change', { target: { name: 'name' } })
    expect(input.props().name).toEqual('name');
})

it('Expect to click input', () => {
    const wrapper = shallow(<Register />);
    const input = wrapper.find('input').at(1).simulate('change', { target: { name: 'email' } })
    expect(input.props().name).toEqual('email');
})

it('Expect to click input', () => {
    const wrapper = shallow(<Register />);
    const input = wrapper.find('input').at(2).simulate('change', { target: { name: 'password' } })
    expect(input.props().name).toEqual('password');
})