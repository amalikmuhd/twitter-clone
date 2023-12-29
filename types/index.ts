export type User = {
  id: string;
  name: string;
  username: string;
  image?: string;
};

export type TweetType = {
  id: string;
  createdAt: string;
  content: string;
  image?: string;
  user: User;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
  impressions?: number;
};
