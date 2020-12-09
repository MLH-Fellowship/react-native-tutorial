import {Text} from 'react-native';
import React from 'react';
import DetailsView from '../DetailsView';
import * as rtl from '@testing-library/react-native';

// import '@testing-library/jest-native/extend-expect';
import { toBeEmpty, toHaveTextContent } from '@testing-library/jest-native';
expect.extend({ toBeEmpty, toHaveTextContent });
import renderer from 'react-test-renderer';

afterEach(() => {
  renderer.cleanup;
});

describe('Details View Component', () => {
  test('UI renders correctly', () => {
    const wrapper = renderer.create(<DetailsView />);
  });  

  test('has a back button', () => {
    const { queryByTestId } = rtl.render(<DetailsView />);    
    expect(queryByTestId('home')).toHaveTextContent(/< home/i);
  })

  test('John Doe is visible', () => {
    const { queryByTestId } = rtl.render(<DetailsView />);    
    expect(queryByTestId('visible')).toHaveTextContent(/John Doe/i);
  });
});

