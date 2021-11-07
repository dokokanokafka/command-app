import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ListItem from '../components/ListItem';

export default function App(props) {
  return (
    <View style={styles.container}>
      <ListItem
        // imageUrl={"https://picsum.photos/id/10/200/200"}
        title={"Linux"}
        author={"コマンドを覚えましょう！"}
        
      />
      <ListItem
        // imageUrl={"https://picsum.photos/id/10/200/200"}
        title={"Vim"}
        author={"コマンドを覚えましょう！"}
        onPress={() =>
          props.navigation.navigate('VimDetail')
          //ここでVimDetailの画面遷移の道筋を示し、第二引数でニュースをURL ArticleScreenに渡す
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});