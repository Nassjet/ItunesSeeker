import { createStackNavigator } from '@react-navigation/stack';

import SearchMusic from '../screens/SearchMusic';
import Results from '../screens/Results';

const Stack = createStackNavigator(); // important : C'est comme si nous essayions d'utiliser un outil avant de le sortir de la boîte à outils.

const AppNavigator = () => {
    return (
    <Stack.Navigator initialRouteName="SearchMusic">
        <Stack.Screen name="SearchMusic" component={SearchMusic}/>
        {/* <Stack.Screen name="Results" component={Results}/> */}
    </Stack.Navigator>
    )
}

export default AppNavigator; 