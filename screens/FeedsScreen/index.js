import React, {useContext} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import LogContext from '../../contexts/LogContext';

function FeedsScreen() {
  const {text, setText} = useContext(LogContext);

  return (
    <View style={styles.block}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={'텍스트를 입력하세용'}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
  block: {},
});

export default FeedsScreen;
