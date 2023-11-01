import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';

export const Search = () => {
  return (
    <View style={styles.SearchContainer}>
      <Searchbar
        style={{flex: 1}}
        placeholder="Search for a TeachTok"
        icon="map"
        value={'searchKeyword'}
        onSubmitEditing={() => {}}
        onChangeText={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 999,
    top: 40,
  },
});
