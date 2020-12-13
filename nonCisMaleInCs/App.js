/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView} from 'react-native';

import Form from '../nonCisMaleInCs/src/components/Form';
import Header from '../nonCisMaleInCs/src/components/Header';

const App: () => React$Node = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <Form />
      </ScrollView>
    </>
  );
};

export default App;
