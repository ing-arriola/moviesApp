import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieDb';

export type RootStackParams = {
    Home:undefined,
    DetailScreen:Movie
}

const Main = createStackNavigator<RootStackParams>();

const MainNavigator = () => {
    return (
        <Main.Navigator
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:'white'
                }
            }}
        >
            <Main.Screen name="Home" component={HomeScreen} />
            <Main.Screen name="DetailScreen" component={DetailScreen} />
        </Main.Navigator>
    )
}

export default MainNavigator
