import React from 'react';
import { shallow, render } from 'enzyme';
import Modal from '../components/Modal';
import { store } from '../store';

test('modal shows', () => {
  const handleClose = jest.fn()

  render(
    expect(shallow(<Modal store={store} onClose={handleClose} />).length).toEqual(1)
  )
});