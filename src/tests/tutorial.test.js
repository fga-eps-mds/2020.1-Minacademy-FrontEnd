import { shallow } from 'enzyme';
import React from 'react';
import Tutorial from '../views/Tutorial';
import { MemoryRouter } from 'react-router-dom'

it('Expect to render Tutorial component', () => {
  expect(
    shallow(
      <MemoryRouter>
        <Tutorial />
      </MemoryRouter>
    ).length).toEqual(1)

    expect(
      shallow(
        <MemoryRouter>
          <Tutorial />
        </MemoryRouter>
      )
    ).toMatchSnapshot()

})