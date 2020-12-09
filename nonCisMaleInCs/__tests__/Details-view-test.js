import React from 'react';
import DetailsView from '../DetailsView';
import * as rtl from '@testing-library/react-native';
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
    expect(queryByTestId('home')).toBeDefined();   
    expect(queryByTestId('home')).not.toBeEmpty();
    expect(queryByTestId('home')).toHaveTextContent(/< home/i);
  });

  test('is scrollable', () => {
    const { queryByTestId } = rtl.render(<DetailsView />); 
    expect(queryByTestId('scroll')).toBeDefined();   
    expect(queryByTestId('scroll')).not.toBeEmpty();
    // expect(queryByTestId('scroll')).toHaveTextContent(/introduction/i);
  });

  test('has user image', () => {
    const { queryByTestId } = rtl.render(<DetailsView />); 
    expect(queryByTestId('image')).toBeDefined();   
    // expect(queryByTestId('image')).not.toBeEmpty();
  });

  test('John Doe is visible', () => {
    const { queryByTestId } = rtl.render(<DetailsView />); 
    expect(queryByTestId('title')).toBeDefined();   
    expect(queryByTestId('title')).not.toBeEmpty();   
    expect(queryByTestId('title')).toHaveTextContent(/John Doe/i);
  });
});

