import { FlatList, Pressable, StyleSheet } from 'react-native';
import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import Tweet from '../../../components/Tweet';
import tweets from '../../../assets/data/tweets';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList showsVerticalScrollIndicator={false} data={tweets} renderItem={({ item }) => <Tweet tweet={item} />} />

      <Link href={'/new-tweet'} asChild>
        <Entypo name="plus" size={24} color={'white'} style={styles.floatingButton} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  floatingButton: {
    backgroundColor: '#1c9bf0',
    width: 50,
    height: 50,
    borderRadius: 25,

    textAlign: 'center',
    lineHeight: 50,

    position: 'absolute',
    right: 15,
    bottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    overflow: 'hidden',
  },
});
