import React, { useRef, useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import type { BottomNavigationParamList } from './types'
import { routes } from './routes'

const Bottom = createBottomTabNavigator<BottomNavigationParamList>()

const BottomTab: React.FC<any> = () => {
  return (
    <Bottom.Navigator screenOptions={{ headerShown: false }}>
      <Bottom.Screen getComponent={() => require('src/features/Home').default} name={routes.home} />
      <Bottom.Screen
        getComponent={() => require('src/features/Setting').default}
        name={routes.setting}
      />
    </Bottom.Navigator>
  )
}

export default BottomTab
