import React from 'react';
import DetailsView from '../src/screens/DetailsView';
import * as rtl from '@testing-library/react-native';
import '@testing-library/jest-native';
expect.extend({});
import renderer from 'react-test-renderer';

afterEach(() => {
  renderer.cleanup;
});

describe('DetailsView Component', () => {
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
  });

  test('has user image', () => {
    const { queryByTestId } = rtl.render(<DetailsView />); 
    expect(queryByTestId('image')).toBeDefined();   
  });

  test('displays name of user, John Doe', () => {
    const { queryByTestId } = rtl.render(<DetailsView />); 
    expect(queryByTestId('title')).toBeDefined();   
    expect(queryByTestId('title')).not.toBeEmpty();   
    expect(queryByTestId('title')).toHaveTextContent(/John Doe/i);
  });

  test('displays details about user', () => {
    const { getByText } = rtl.render(<DetailsView />); 
    expect(getByText('Introduction')).toBeDefined();
    expect(getByText('Contribution')).toBeDefined();
    expect(getByText('Domain ( Tag form )')).toBeDefined();
  });

  test('has edit button', () => {
    const { getByText, queryByTestId } = rtl.render(<DetailsView />); 
    expect(queryByTestId('button')).toBeDefined();   
    expect(queryByTestId('button')).not.toBeEmpty();   
    expect(getByText('EDIT BUTTON')).toBeDefined();  
  })
});

