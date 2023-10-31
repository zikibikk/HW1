import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from './screens/Main';
import { CompletedTasks } from './screens/CompletedTasks';
import { LogScreen } from './screens/LogScreen';
import { WithAxios } from './screens/WithAxios';

const Stack = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="WithAxios" screenOptions={{headerShown:false}}>
            <Stack.Screen name="WithAxios" component={WithAxios} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="CompletedTasks" component={CompletedTasks} />
            <Stack.Screen name="Log" component={LogScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;