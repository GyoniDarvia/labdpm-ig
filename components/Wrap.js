import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Sorotan = (props) => {
  return (
    <View style={{ alignItems: 'center', marginRight: 20 }}>
      <Image style={styles.sorotan} source={{ uri: props.gambar }} />
      <Text style={styles.txtSor}>{props.text}</Text>
    </View>
  );
};

const Wrap = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Image
            style={styles.pp}
            source={{
              uri: 'https://i.pinimg.com/736x/c9/13/7e/c9137e7a2879f90e22df9fc5cd3bf85f.jpg',
            }}
          />
          <Text style={styles.username}>MobileLegends</Text>
        </View>

        <View style={styles.wt}>
          <View style={styles.huruf}>
            <Text style={styles.bold}>0</Text>
            <Text style={styles.regular}>Postingan</Text>
          </View>

          <View style={styles.huruf}>
            <Text style={styles.bold}>801</Text>
            <Text style={styles.regular}>Pengikut</Text>
          </View>

          <View style={styles.huruf}>
            <Text style={styles.bold}>10</Text>
            <Text style={styles.regular}>Mengikuti</Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Sorotan
          gambar="https://esports.id/img/article/225220181127085325.jpg"
          text="Fanny"
        />
        <Sorotan
          gambar="https://i1.wp.com/gemskul.com/wp-content/uploads/2022/10/Beatrix-M4.jpeg"
          text="Beatrix"
        />
        <Sorotan
          gambar="https://gamefinity.id/wp-content/uploads/2021/08/Mobile-Legends-Ling.jpg"
          text="Ling"
        />
        <Sorotan
          gambar="https://cdn.oneesports.gg/cdn-data/sites/2/2021/09/MLBB_Lancelot.jpg"
          text="Lancelot"
        />
        <Sorotan
          gambar="https://cdn.oneesports.id/cdn-data/sites/2/2022/02/Build-Moskov-Tersakit-2021-Top-Global-dan-Xinn.jpg"
          text="Moskov"
        />
      </View>
    </View>
  );
};

export default Wrap;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  wrap: {},
  pp: {
    borderWidth: 2,
    borderColor: 'white',
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  wt: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  huruf: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  bold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  regular: {
    fontSize: 14,
    color: 'white',
  },
  sorotan: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  txtSor: {
    fontSize: 14,
    color: 'white',
  },
});
