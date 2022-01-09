import React, { useRef, useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { BottomNavigationParamList, MainStackParamList } from './types'

import { routes } from './routes'

const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack: React.FC<any> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen getComponent={() => require('./Bottom').default} name={routes.bottom} />

      <Stack.Screen
        getComponent={() => require('src/features/Animation').default}
        name={routes.animation}
      />
      <Stack.Screen
        getComponent={() => require('src/features/ImageScreen').default}
        name={routes.image}
      />
      <Stack.Screen
        options={{ presentation: 'modal' }}
        getComponent={() => require('src/features/SvgScreen').default}
        name={routes.svg}
      />
      <Stack.Screen
        options={{ presentation: 'modal' }}
        getComponent={() => require('src/features/Storage').default}
        name={routes.storage}
      />
    </Stack.Navigator>
  )
}

export default MainStack
