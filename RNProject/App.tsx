import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from 'src/navigation'

type AppProps = {}

const App: React.FC<AppProps> = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}

export default App
