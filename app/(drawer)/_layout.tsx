// import { withLayoutContext } from 'expo-router';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
// const DrawerNavigator = createDrawerNavigator().Navigator;

// const Drawer = withLayoutContext(DrawerNavigator);

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Text } from 'react-native';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={{ alignSelf: 'center', fontSize: 20 }}>Valdim</Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function DrawerLayout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false, title: 'Home' }} />
      <Drawer.Screen name="bookmarks" options={{ title: 'Bookmarks' }} />
      <Drawer.Screen name="twitter-blue" options={{ title: 'Twutter Blue' }} />
    </Drawer>
  );
}
