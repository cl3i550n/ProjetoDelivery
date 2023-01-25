import React from 'react';

// Dependencias
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Imports Locais
import {
  HomeStack,
  StoresMapStack,
  NotificationsStack,
  ProfileStack,
} from './StackNavigation';

const Tab = createMaterialBottomTabNavigator();

export function TabHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Home',
          tabBarColor: '#007f5f',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="StoresMapTab"
        component={StoresMapStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({color}) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={NotificationsStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Notificações',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStackTab"
        component={ProfileStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Perfil',
          tabBarColor: '#694fad',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function TabNotifyScreen() {
  <Tab.Navigator>
    <Tab.Screen
      name="NotificationsTab"
      component={NotificationsStack}
      options={{
        unmountOnBlur: true,
        tabBarLabel: 'Notificações',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>;
}
