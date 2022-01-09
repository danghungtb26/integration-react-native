import React from 'react'
import { Box, Text } from '@rn-base/element'
import FastImage from 'react-native-fast-image'

type ImageScreenProps = {}

const ImageScreen: React.FC<ImageScreenProps> = () => {
  return (
    <Box flex={1}>
      <Text>FastImage</Text>
      <FastImage
        source={{
          uri: 'https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-16346430033x2.jpg?impolicy=website&width=510&height=356',
        }}
        style={{
          width: '100%',
          height: 200,
        }}
      />

      <Text>FastImage local</Text>
      <FastImage
        source={require('src/assets/download.jpeg')}
        style={{
          width: '100%',
          height: 200,
        }}
      />
    </Box>
  )
}

export default ImageScreen
