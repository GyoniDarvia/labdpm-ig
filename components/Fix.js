import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Fix = () => {
  return (
    <View style={{ borderWidth: 2, borderColor: '#181D31' }}>
      <View style={{ borderWidth: 2, borderColor: '#F56EB3' }}>
        <View style={{ borderWidth: 2, borderColor: '#22A39F' }}>
          <Text> Ini adalah Dimension Fix </Text>
        </View>

        <View
          style={{
            borderWidth: 2,
            borderColor: '#434242',
            padding: 8,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={{ width: 50, height: 50, backgroundColor: '#5F8D4E' }} />
          <View style={{ width: 50, height: 50, backgroundColor: '#DAE2B6' }} />
          <View style={{ width: 50, height: 50, backgroundColor: '#CE7777' }} />
          <View style={{ width: 50, height: 50, backgroundColor: '#A4BE7B' }} />
          <Image>
            source={require('../assets/favicon.png')}
            style=
            {{
              width: 50,
              height: 50,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: '#4856D2',
            }}
          </Image>
        </View>
      </View>
    </View>
  );
};

export default Fix;
