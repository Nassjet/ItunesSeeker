import { createStackNavigator } from '@react-navigation/stack';

import SearchMusic from '../components/SearchMusic';
import Playlist from '../components/Playlist';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator(); // important : C'est comme si nous essayions d'utiliser un outil avant de le sortir de la boîte à outils.

const AppNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="SearchMusic">
                <Stack.Screen name="SearchMusic" component={SearchMusic}/>
                {/* <Stack.Screen name="Playlist" component={Playlist}/> */}
            </Stack.Navigator>
    )
}

export default AppNavigator; 