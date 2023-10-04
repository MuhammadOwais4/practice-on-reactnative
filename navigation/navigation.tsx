import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Splash from '../Screens/Splash';
import Intro1 from '../Screens/Intro1';
import Intro2 from '../Screens/Intro2';

const Navigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen options={{
                    headerShown: false
                }} name="Splash" component={Splash} />

                <Stack.Screen options={{
                    headerShown: false
                }} name="Intro1" component={Intro1} />

                <Stack.Screen options={{
                    headerShown: false
                }} name="Intro2" component={Intro2} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation