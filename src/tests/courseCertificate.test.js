import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import React from 'react';
import CourseCertificates from '../views/CourseCertificates';


it('Expect to render learnerCertificate', () => {
  expect(
    shallow(
      <MemoryRouter>
        <CourseCertificates />
      </MemoryRouter>
    ).length
  ).toEqual(1)
})