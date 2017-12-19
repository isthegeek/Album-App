import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
    render() {
      return (
          <TouchableOpacity>
            <Text> Click Me!! </Text>
          </TouchableOpacity>
      );
    }
}
