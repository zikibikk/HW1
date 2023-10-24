import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from './screens/Main';
import { CompletedTasks } from './screens/CompletedTasks';
import { LogScreen } from './screens/LogScreen';

const Stack = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="CompletedTasks" component={CompletedTasks} />
            <Stack.Screen name="Log" component={LogScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;