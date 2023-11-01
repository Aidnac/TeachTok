import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ActionButtons: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shares}>
        <View style={styles.shareIcon}>
          <View style={styles.union} />
          <View style={styles.unionWhite} />
        </View>
        <Text style={styles.shareText}>Share</Text>
      </View>
      <View style={styles.comments}>
        <Text style={styles.commentsText}>578</Text>
        <View style={styles.messageIcon}>
          <View style={styles.union} />
          <View style={styles.subtract} />
        </View>
      </View>
      <View style={styles.likes}>
        <Text style={styles.likesText}>328.7K</Text>
        <View style={styles.heartIcon}>
          <View style={styles.union} />
          <View style={styles.unionWhite} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 41,
    height: 208,
    position: 'relative',
  },
  shares: {
    width: 34.25,
    height: 51.5,
    left: 2.75,
    top: 156.5,
    position: 'absolute',
    opacity: 0.9,
  },
  shareIcon: {
    width: 34.08,
    height: 26.84,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  union: {
    width: 34.08,
    height: 26.84,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: '#FBFBFB',
  },
  unionWhite: {
    width: 30.08,
    height: 26.57,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: 'white',
  },
  shareText: {
    left: 0.25,
    top: 35.5,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontFamily: 'Proxima Nova',
    fontWeight: '600',
    wordWrap: 'break-word',
  },
  comments: {
    width: 35,
    height: 54.5,
    left: 2.5,
    top: 76.5,
    position: 'absolute',
    opacity: 0.9,
  },
  commentsText: {
    left: 6.5,
    top: 38.5,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontFamily: 'Proxima Nova',
    fontWeight: '600',
    wordWrap: 'break-word',
  },
  messageIcon: {
    width: 35,
    height: 33.23,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  heartIcon: {
    width: 35.5,
    height: 32.36,
    left: 2.5,
    top: 0,
    position: 'absolute',
  },
  likes: {
    width: 41,
    height: 54,
    left: 0,
    top: 0,
    position: 'absolute',
    opacity: 0.9,
  },
  likesText: {
    left: 0,
    top: 38,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontFamily: 'Proxima Nova',
    fontWeight: '600',
    wordWrap: 'break-word',
  },
});

export default ActionButtons;
