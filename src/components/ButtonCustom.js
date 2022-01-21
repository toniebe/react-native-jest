import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class ButtonCustom extends Component {
  

  render() {
    return (
      <TouchableOpacity style={styles.button} >
        <Text style={{color: 'white'}}>Button</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'blue',
  },
});
