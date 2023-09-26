import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'

class HelloWorldApp extends Component {
  render() {
    return (
      <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000}/>
    );
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);

export default HelloWorldApp