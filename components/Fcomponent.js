import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Fcomponent = () => {
  return (
    <View style={styles.contaier}>
      <Text style={styles.text}>ini adalah Fungsional Component</Text>
      <Image style={styles.foto} source={require('../assets/snack-icon.png')} />
    </View>
  );
};

export default Fcomponent;

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    padding: 12,
    backgroundColor: 'gray',
    borderRadius : 20,
    marginTop : 20
  },
  foto: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'purple',
    borderRadius : 50
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
