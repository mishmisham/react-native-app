import React from 'react';
import {View, Text} from 'react-native';
import {styles} from "./AppStyle";

const App = () => {
  return (
    <View
      style={styles.app}>
      <Text
        style={styles.text}
      >Hello, world!</Text>
    </View>
  );
};

export default App;