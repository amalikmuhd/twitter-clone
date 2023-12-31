import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Tweet from '../../components/Tweet';
import tweets from '../../assets/data/tweets';
export default function TweetScreen() {
  const { id } = useLocalSearchParams();

  const tweet = tweets.find((t) => t.id === id);
  if (!id) {
    return <Text>tweet {id} not found</Text>;
  }
  return <Tweet tweet={tweet} />;
}
