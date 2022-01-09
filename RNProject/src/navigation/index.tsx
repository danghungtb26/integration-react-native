import React from 'react'
import { Box, Text } from '@rn-base/element'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './MainStack'

type NavigationProps = {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default Navigation
