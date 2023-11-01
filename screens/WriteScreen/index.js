import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteEditor from '../../components/WriteEditor';
import WriteHeader from '../../components/WriteHeader';
import LogContext from '../../contexts/LogContext';

function WriteScreen() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigation = useNavigation();

  const {onCreate} = useContext(LogContext);
  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });

    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      {/* TextInput에서 Enter를 여러번 눌러 화면에서 기본적으로 보여줄 수 있는 줄 수를 초과할 경우,
          안드로이드는 스크롤이 가능하지만 IOS에서는 하단 내용이 잘리게 된다. 따라서 아래처럼 Write*
          컴포넌트를 KeyboardAvoidingView로 감싸줘야 한다. */}
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
