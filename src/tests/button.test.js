import { shallow } from 'enzyme';
import React from 'react';
import Button from '../components/Button';

it('Expect to render Button component', () => {
  expect(shallow(<Button></Button>).length).toEqual(1)
})

it('Expect to click button', () => {
  const wrapper = shallow(<Button />);
  wrapper.find('button').simulate('click')
})