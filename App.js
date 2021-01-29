
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Translatescreen from './screens/translatescreen'
import Welcomescreen from './screens/welcomescreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Translatescreen />
      </View>
    );
  }
}