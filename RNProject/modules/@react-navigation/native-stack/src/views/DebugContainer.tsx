import * as React from 'react'
import { View, ViewProps } from 'react-native'
import type { StackPresentationTypes } from 'react-native-screens'

type ContainerProps = ViewProps & {
  stackPresentation: StackPresentationTypes
  children: React.ReactNode
}

export default function Container(props: ContainerProps) {
  const { stackPresentation: _, ...rest } = props
  return <View {...rest} />
}
