import React from 'react';
import {Icon} from 'native-base';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import homeScreen from '../../home/screen';
import historyScreen from '../../history/screen';
import accountScreen from '../../account/screen';
import authScreen from '../../auth/screen/LoginPage';

const BottomTab = createMaterialBottomTabNavigator({
    Home: { 
        screen: homeScreen,
        navigationOptions: ()=>({
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon name='parking' type='FontAwesome5' style={{ color: tintColor, fontSize: 20 }} />
              )
        })
    },
    Reserve: { 
        screen: historyScreen, 
        navigationOptions: ()=>({
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon name='clipboard-list' type='FontAwesome5' style={{ color: tintColor, fontSize: 20 }} />
              )
        })
    },
    Account: { 
        screen: accountScreen,
        navigationOptions: ()=>({
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon name='user-alt' type='FontAwesome5' style={{ color: tintColor, fontSize: 20 }} />
              )
        })
    }    
},{
    activeTintColor: 'blue',
    shifting: true,
    barStyle: {
        backgroundColor: 'white',
        borderTopColor: 'blue',
        borderTopWidth: 0.8,
    },
    initialRouteName: 'Home'
});

const RootNavigator = createStackNavigator({
    HomeRoot: BottomTab,
    Auth : { screen: authScreen},
    History: { screen: historyScreen}
},{
    initialRouteName: 'HomeRoot',
    headerMode: 'none'
})

export default createAppContainer(RootNavigator);