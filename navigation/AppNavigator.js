import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome} from "@expo/vector-icons";
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import VimDetailScreen from '../screens/VimDetailScreen';
import ClipScreen from '../screens/ClipScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//上部側
const HomeStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}//ヘッダーにhomeを載せないため
            />
            <Stack.Screen
                name="VimDetail"
                component={VimDetailScreen}
            />
        </Stack.Navigator>
    );
}

const ClipStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Clip"
                component={ClipScreen}
            />
            <Stack.Screen
                name="VimDetail"
                component={VimDetailScreen} //クリップの中でも詳細記事が見れてかつ、クリップタブがOnになっているようにするため
            />
        </Stack.Navigator>
    );
};

//下側のアイコン
const screenOption = ({route}) => ({
    tabBarIcon: ({color, size}) => {
        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Clip':
            iconName = 'bookmark';
            break;
        }
        return <FontAwesome name={iconName} size={size} color={color} />;
    },
});

// ここでどのページがあるかをまとめてる
export default AppNavigator = () => { 
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions ={screenOption}>
            {/* <Tab.Navigator> */}
                <Tab.Screen name="Home" component={HomeStack}/>
                <Tab.Screen name="Clip" component={ClipStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};