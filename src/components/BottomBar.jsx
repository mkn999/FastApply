import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
function BottomBar() {
  const navigation = useNavigation();
  const route = useRoute(); //route.name -> name of current screen
  console.log(route.name);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Active Tab */}
        <TouchableOpacity
          style={
            route.name === 'LandingScreen'
              ? styles.activeTab
              : styles.iconButton
          }
          onPress={() => {
            navigation.navigate('LandingScreen');
          }}
        >
          <Text style={{ fontSize: 24 }}>🏠</Text>
          {route.name === 'LandingScreen' ? (
            <Text style={styles.activeText}>Home</Text>
          ) : null}
        </TouchableOpacity>

        <TouchableOpacity
          style={
            route.name === 'ProfileScreen'
              ? styles.activeTab
              : styles.iconButton
          }
          onPress={() => {
            navigation.navigate('ProfileScreen');
          }}
        >
          <Text style={{ fontSize: 28 }}>👤</Text>
          {route.name === 'ProfileScreen' ? (
            <Text style={styles.activeText}>Profile</Text>
          ) : null}
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Text style={{ fontSize: 28 }}>✉️</Text>
          {/* {route.name === 'LandingScreen' ? (
            <Text style={styles.activeText}>Mail</Text>
          ) : (
            null
          )} */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BottomBar;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },

  container: {
    height: 80,
    borderRadius: 40,

    backgroundColor: 'rgba(30,30,30,0.75)',

    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 18,

    shadowColor: '#000000ff',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },

    elevation: 8,
  },
  activeTab: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 18,
    height: 56,

    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#ffffffff',

    minWidth: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeText: {
    color: '#fff',
    fontFamily: 'AbhayaLibre-ExtraBold',
    fontSize: 20,
    textAlign:'center',
    marginLeft: 10,
  },

  iconButton: {
    width: 56,
    height: 56,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
