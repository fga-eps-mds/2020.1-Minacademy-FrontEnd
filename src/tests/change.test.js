import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import React from 'react';
import Change from '../views/Change';


it('Expect to render Change view', () => {
  expect(
    shallow(
      <MemoryRouter>
        <Change />
      </MemoryRouter>
    ).length
  ).toEqual(1)
})