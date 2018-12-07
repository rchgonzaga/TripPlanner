/**
 * Sample React Native App
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <HomeScreen />
    );
  }
}