
import 'react-native';
import React from 'react';
import DetailsView from '../DetailsView';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Details View Component', () => {
    test('renders correctly', () => {
        renderer.create(<DetailsView />);
    });
});

