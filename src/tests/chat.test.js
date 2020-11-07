import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import React from 'react';
import Chat from '../components/Chat';


it('Expect to render chat', () => {
  expect(
    shallow(
      <MemoryRouter>
        <Chat />
      </MemoryRouter>
    ).length
  ).toEqual(1)
})