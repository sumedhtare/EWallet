import 'react-native-gesture-handler';
import React,{useEffect, FC} from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Theme } from './theme';
import IonIcon from 'react-native-vector-icons/Ionicons'
import HomeScreen from './screens/home/home'
import CradScreen from './screens/debitCard/debitCard'
import SpendingLimit from './screens/spendingLimit/spendingLimit'
import {connect} from 'react-redux'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type dispatch ={
  type: String,
  value: String,
}

type Props ={
  dispatch:(data: dispatch)=> void
}
const Routes: FC<Props> = (props) => {
  useEffect(()=>{
    props.dispatch({type:'CARD_DATA', value:'init'})
  })
  return <> 
      <StatusBar barStyle='light-content' backgroundColor={Theme.colors.background}/>
  <NavigationContainer theme={Theme}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Card" component={BottomTabs} />
      <Stack.Screen name="SpendingLimit" component={SpendingLimit} />
    </Stack.Navigator>
  </NavigationContainer>
  </>
}

export default connect()(Routes)

const BottomTabs: FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { backgroundColor: '#FFF' },
      }}
      initialRouteName='CardScreen'
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="CardScreen" component={CradScreen}
        options={{
          tabBarLabel: 'Debit Card',
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="card" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Payment" component={HomeScreen}
        options={{
          tabBarLabel: 'Payments',
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="repeat-outline" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Credit" component={HomeScreen}
        options={{
          tabBarLabel: 'Credit',
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="trending-up-outline" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Profile" component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="person" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}