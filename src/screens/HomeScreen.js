import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';

class HomeScreen extends Component {

  state = {
    counter: 0
  }

  handleCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/background.png')}
        imageStyle={{ resizeMode: 'stretch' }}
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'space-between'
        }}
      >
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Image source={require('../../assets/logo.png')} />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: 32
        }}>
          <Image source={require('../../assets/point.png')} />
        </View>

        <TouchableWithoutFeedback onPress={this.handleCounter}>
          <View style={{ backgroundColor: 'green', paddingBottom: 16, }}>
            <Text style={{ textAlign: 'center' }}>Aowwwws {this.state.counter}</Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    )
  }
}

export default HomeScreen