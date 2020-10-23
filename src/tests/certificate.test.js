import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import React from 'react';
import Certificate from '../views/Certificate';


it('Expect to render learnerCertificate', () => {
  expect(
    shallow(
      <MemoryRouter>
        <Certificate />
      </MemoryRouter>
    ).length
  ).toEqual(1)
})