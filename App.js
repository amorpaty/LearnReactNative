/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react'; //리액트 컴포넌트를 만들때는 이 코드를 꼭 넣어줘야 한다.
import { SafeAreaView, StyleSheet } from 'react-native';
import Counter from './component/Counter';

const App = () => {

  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    < SafeAreaView style={styles.full} >
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}></Counter>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
})

export default App;
