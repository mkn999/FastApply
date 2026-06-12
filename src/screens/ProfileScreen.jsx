import React from 'react';
import BottomBar from '../components/BottomBar';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C1818',
      }}
    >
      <Text
        style={{
          color: '#ffffff',
        }}
      >
        Profile Screen
      </Text>
      <BottomBar />
    </View>
  );
}
