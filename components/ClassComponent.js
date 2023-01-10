import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class ClassComponent extends Component {
  render() {
    return (
      <View style={styles.contaier}>
        <Text style={styles.text}> ini adalah ClassComponent </Text>
        <Image
          style={styles.foto}
          source={require('../assets/snack-icon.png')}
        />
      </View>
    );
  }
}

export default ClassComponent;

const styles = StyleSheet.create({
   contaier: {
    flex: 1,
    padding: 12,
    backgroundColor: 'purple',
    borderRadius : 20,
    marginTop : 20
  },
  foto: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'gray',
    borderRadius : 50
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    color : 'white'
  },
});
