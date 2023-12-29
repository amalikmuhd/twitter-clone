import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Tweet = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <Image src={tweet.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.context}>{tweet.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 5,
    flex: 1,
  },
  name: {
    fontWeight: '600',
  },
  context: {
    lineHeight: 20,
    marginTop: 5,
  },
});

export default Tweet;
