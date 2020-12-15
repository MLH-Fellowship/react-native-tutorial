import React from 'react';
import {render} from '@testing-library/react-native';
import ExampleView from '../src/screens/ExampleView';

/*
  this test suite is for branch example-step-1

  Goal: add a button with the text "hello world"
*/

it('Example View should have a button with the text "hello world"', () => {
  const {getByRole} = render(<ExampleView />);

  expect(getByRole('button')).toBeTruthy();
  expect(getByRole('button')).toHaveTextContent('hello world');
});
