import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants'
import {Magnetometer, DeviceMotion} from 'expo-sensors'

export default class App extends React.Component {
  state = { isReady: false }

  // compass
  // _setupMagnetometerAsync = async () => {
  //   Magnetometer.addListener( vector => {
  //     this.setState({vector})
  //   })
  // }

  _setupDeviceMotionAsync = async () => {
    DeviceMotion.addListener( dm => {
      // console.log(dm.rotation)
      this.setState({dm})
    })
    DeviceMotion.setUpdateInterval(16)
  }
  componentDidMount() {
    // this._setupMagnetometerAsync()
    this._setupDeviceMotionAsync()
  }
  render() {
    // Compass
    // let theta = "0rad"
    // if (this.state.vector) {
    //   let {x,y,z} = this.state.vector
    //   theta = Math.atan(-x/y)
    //   if (-x > 0 && y > 0) {

    //   } else if (y > 0) {
    //     theta += Math.PI
    //   } else {
    //     theta += Math.PI * 2
    //   }
    // }

    // DeviceMotion
    let angle = 0
    if (this.state.dm && this.state.dm.rotation) {
      angle = -this.state.dm.rotation.gamma
    }
    return (
      <View style={styles.container}>
        {/* Compass */}
        {/* <Text>{JSON.stringify(theta)}</Text>
        <ImageBackground 
          source={require('./images/CompassFace.png')}
          style={{
            height: 290,
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image 
            source={require('./images/CompassNeedle.png')}
            style={{
              height: 300,
              width: 300,
              opacity: 0.68,
              transform: [{rotate: theta + 'rad'}]
            }}
          />
        </ImageBackground> */}

        {/*  */}
        <Image
          source={require('./images/UpHouse.jpg')}
          style={{
            height: 600,
            width: 500,
            transform: [{rotate: angle + 'rad'}]
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
