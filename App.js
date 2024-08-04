/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react'; //리액트 컴포넌트를 만들때는 이 코드를 꼭 넣어줘야 한다.
import type { Node } from 'react';
{/* import Greeting from './component/Greeting' */ }
import Box from './component/Box';

import {
  SafeAreaView,
  Button
} from 'react-native';

const App = () => {
  const [visible, setVisible] = useState(true);
  const name = 'JSX';

  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView>
      {/* JSX에서 주석을 작성하는 방법 {/*와 *} 사이에 주석을 넣는 것 */}
      {/*<Greeting name={name} />*/}
      <Button title="토글" onPress={onPress}></Button>
      {visible && <Box rounded={true} size="large" color="gold" />}
    </SafeAreaView>
  );
};


export default App;
