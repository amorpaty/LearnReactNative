/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'; //리액트 컴포넌트를 만들때는 이 코드를 꼭 넣어줘야 한다.
import type { Node } from 'react';
{/* import Greeting from './component/Greeting' */ }
import Box from './component/Box';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const name = 'JSX';
  return (
    <SafeAreaView>
      {/* JSX에서 주석을 작성하는 방법 {/*와 *} 사이에 주석을 넣는 것 */}
      {/*<Greeting name={name} />*/}
      <Box rounded={true} size="large" color="gold" />
    </SafeAreaView>
  );
};


export default App;
