import { createStackNavigator } from '@react-navigation/stack';

import SearchMusic from '../components/SearchMusic';
import FavoritesScreen from '../components/FavoritesScreen'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator(); 

const AppNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="SearchMusic">
                <Stack.Screen name="SearchMusic" component={SearchMusic}/>
                <Stack.Screen name="FavoritesScreen" component={FavoritesScreen}/>
            </Stack.Navigator>
    )
}

export default AppNavigator; 