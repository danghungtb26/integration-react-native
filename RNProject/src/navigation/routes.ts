import type { RoutesType } from './types'

type Entries<T> = {
  [K in keyof T]: K
}

export const routes: Entries<RoutesType> = {
  animation: 'animation',
  bottom: 'bottom',
  home: 'home',
  setting: 'setting',
  image: 'image',
  svg: 'svg',
  storage: 'storage',
}
