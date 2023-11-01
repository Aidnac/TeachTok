import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeArea} from '../utils/safearea';
import {Search} from '../components/search';

export const HomeScreen = () => {
  return (
    <SafeArea style={styles.container}>
      <Search />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
