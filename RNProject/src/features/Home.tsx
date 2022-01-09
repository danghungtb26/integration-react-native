import React from 'react'
import { Box, Text } from '@rn-base/element'
import type { BottomTabScreenNavigationProps } from 'src/navigation/types'
import { routes } from 'src/navigation/routes'
import { FlatList } from 'react-native-gesture-handler'
import { Pressable } from 'react-native'

type HomeProps = BottomTabScreenNavigationProps<'home'>

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const lists = [
    {
      key: 1,
      name: 'Animation',
      onPress: () => navigation.push(routes.animation),
    },
    {
      key: 2,
      name: 'Image',
      onPress: () => navigation.push(routes.image),
    },
    {
      key: 3,
      name: 'Svg',
      onPress: () => navigation.push(routes.svg),
    },
    {
      key: 4,
      name: 'Storage-MMKV',
      onPress: () => navigation.push(routes.storage),
    },
  ]

  return (
    <Box flex={1}>
      <FlatList
        data={lists}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={item.onPress}>
              <Box padding={[12, 12]}>
                <Text>{item.name}</Text>
              </Box>
            </Pressable>
          )
        }}
        keyExtractor={i => `${i.key}`}
      />
    </Box>
  )
}

export default Home
