import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Add from '../screens/Add';
import Test from '../screens/Test';

const Route = createStackNavigator({
    Home: {
        screen: Home
    },
    Add: {
        screen: Add
    },
    Test: {
        screen: Test
    }
});

export default createAppContainer(Route);