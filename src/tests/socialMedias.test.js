import { shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SocialMedias from '../components/SocialMedias';

it('Expect to render SocialMedias', () => {
  expect(
    shallow(
      <MemoryRouter>
        <SocialMedias  />
      </MemoryRouter>
    ).length
  ).toEqual(1);
});
