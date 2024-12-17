import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/Screen/Login/Login';
import Profile from './src/Screen/Profile/Profile';
import PostDetail from './src/Screen/PostDetail/PostDetail';
import CreatePost from './src/Screen/CreatPost/CreatePost';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Profile"
          options={{headerShown: false}}
          component={Profile}
        />
        <Stack.Screen
          name="PostDetail"
          options={{headerShown: false}}
          component={PostDetail}
        />
        <Stack.Screen
          name="CreatePost"
          options={{headerShown: false}}
          component={CreatePost}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
