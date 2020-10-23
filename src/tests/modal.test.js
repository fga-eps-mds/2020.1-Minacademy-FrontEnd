import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Modal from '../components/Modal';

test('modal shows', () => {
  const handleClose = jest.fn()

  render(
    expect(shallow(<Modal onClose={handleClose} />).length).toEqual(1)
  )
});