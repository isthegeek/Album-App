import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
    render() {
      return (
          <TouchableOpacity style={styles.buttonStyle} onPress={this.props.onPress}>
            <Text style={styles.buttonTextStyle}> Buy Now </Text>
          </TouchableOpacity>
      );
    }
}

const styles = {
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};
