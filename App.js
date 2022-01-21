import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Button from './src/components/ButtonCustom';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  sum = (a, b) => {
    this.setState({
      result: a + b,
    });
  };

  render() {
    return (
      <View>
        <Text testID='myTextResult'>{this.state.result}</Text>
        <Button />
        <TouchableOpacity testID='myButtonSum' onPress={() => this.sum(3,9)}>
          <Text>Sum</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
