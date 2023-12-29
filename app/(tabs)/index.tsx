import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Tweet from '../../components/Tweet';
import tweets from '../../assets/data/tweets';
export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList showsVerticalScrollIndicator={false} data={tweets} renderItem={({ item }) => <Tweet tweet={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
