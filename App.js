import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class AlbumApp extends Component {
  render() {
    return (
    <View> 
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AlbumApp', () => AlbumApp);
