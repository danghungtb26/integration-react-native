import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import type {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/core'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type BottomNavigationParamList = {
  home: undefined
  setting: undefined
}

export type MainStackParamList = {
  bottom: NavigatorScreenParams<BottomNavigationParamList>
  animation: undefined
  image: undefined
  svg: undefined
  storage: undefined
}

export type RoutesType = BottomNavigationParamList & MainStackParamList

export interface BottomTabScreenNavigationProps<T extends keyof BottomNavigationParamList> {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomNavigationParamList>,
    NativeStackNavigationProp<MainStackParamList>
  >
  route: RouteProp<BottomNavigationParamList, T>
}
