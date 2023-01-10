import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Fix from './components/Fix';
import Wrap from './components/Wrap'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Wrap/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  
});