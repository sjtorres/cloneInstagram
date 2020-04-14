import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Platform } from 'react-native'

import icon from '../assets/logo.png'

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}>Cinstagram</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 25,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    height: 30,
    width: 30,
    marginRight: 10,
    resizeMode: 'contain',
  },

  title: {
    color: '#000',
    // fontFamily: 'shelter',
    height: 30,
    fontSize: 28,
    marginBottom: 10,
  },
})

export default Header