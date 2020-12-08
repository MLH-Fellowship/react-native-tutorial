
import 'react-native';
import React from 'react';
import DetailsView from '../DetailsView';
import renderer from 'react-test-renderer';
import * as rtl from '@testing-library/react-native';

afterEach(() => {
    renderer.cleanup;
});

let wrapper;

beforeEach(() => {
    wrapper = renderer.create(<DetailsView />)
})

describe('Details View Component', () => {
    test.only('UI renders correctly', () => {
        
    });
});

