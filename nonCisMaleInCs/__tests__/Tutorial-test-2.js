import React from 'react';
import {render} from '@testing-library/react-native';
import ExampleView from '../src/screens/ExampleView';

/*
  this test suite is for branch example-step-2

  Goal: add text that says "We did it!"
*/

it('Example View should have text that says "We did it!"', () => {
  const {getByText} = render(<ExampleView />);

  expect(getByText('We did it!')).toBeTruthy();
});
