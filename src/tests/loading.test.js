import { shallow } from 'enzyme';
import React from 'react';
import Loading from '../views/Loading';


it('Expect to render Loading view', () => {
  expect(
    shallow(
        <Loading />
    ).length
  ).toEqual(1)
})