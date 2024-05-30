import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookListScreen from './components/BookListScreen';
import BookDetailScreen from './components/BookDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BookList"
          component={BookListScreen}
          options={{title: 'Books'}}
        />
        <Stack.Screen
          name="BookDetail"
          component={BookDetailScreen}
          options={{headerBackTitleVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
