import React, { Component } from 'react'
import { View } from 'react-native'

import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
  render() {
      const comments = [{
          nickname: 'Isabela Caberizi Torres',
          comment: 'Excelente Foto!'
      }, {
          nickname: 'Gabriela Caberizi Torres',
          comment: 'Muito Ruim! Faço Melhor...'
      }]

    return (
      <View style={{ flex: 1 }}>
        <Header />

        <Post  
            image={require('./assets/imgs/fence.jpg')}
            comments={comments}
        />
      </View>
    )
  }
}