import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import { GradientProvider } from './src/context/GradientContext';


const AppState = ({children}:any) => {
  return(
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MainNavigator/>
      </AppState>
    </NavigationContainer>
  )
}

export default App
