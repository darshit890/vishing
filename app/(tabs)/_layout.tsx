import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Home, Info, Search } from 'lucide-react-native';
import { useColorScheme } from '@/hooks/useColorScheme';

function TabBarIcon({ color, size, Icon }: any) {
  return (
    <View style={styles.iconContainer}>
      <Icon color={color} size={size} />
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const tabBarStyle = {
    backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#ffffff',
    borderTopColor: colorScheme === 'dark' ? '#333333' : '#e0e0e0',
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#5D3FD3', // Purple color to match the image
        tabBarInactiveTintColor: '#757575',
        headerShown: false,
        tabBarStyle: [styles.tabBar, tabBarStyle],
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              Icon={Home}
              color={color}
              size={focused ? 28 : 24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              Icon={Info}
              color={color}
              size={focused ? 28 : 24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    borderTopWidth: 1,
    elevation: 8,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -4,
    },
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});