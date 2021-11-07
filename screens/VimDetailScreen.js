import React from 'react';
import { View,StyleSheet, Text, FlatList,SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch,useSelector } from 'react-redux';
import createPersistoid from 'redux-persist/es/createPersistoid';
import Loading from '../components/Loading';
import { addClip, deleteClip } from "../store/actions/user";
import ClipButton from '../components/ClipButton';
import vim from '../dummies/vim.json';
import VimList from '../components/VimList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        marginTop:30,
        fontSize:30,
    },
    subtitle: {
        marginTop:30,
        marginBottom:10,
    },
    subtitleDisc: {
        // marginTop:30,
        marginBottom:10,
    },
    aaa:{
        backgroundColor: '#fff',
    }
});

export default VimDetailScreen = ( props ) => {


    const { route } = props;
    // const { VimDetail } = route.params;//homescreen.jsのArticleを受け取れる

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const { clips } = user;

    const isClipped = () => {
        // 配列の中に要素があるかを確認するときにsomeを使う
        return clips.some((clip) => clip.url === vim.url);
    }

    const toggleClip = () => {
        if(isClipped()){
            dispatch(deleteClip({ clip: vim }));
        } else{
            dispatch(addClip({clip: VimDetail}));
        }
    }
    const articles = vim;

    console.log('articles',articles);

    return (
    // <SafeAreaView style={styles.container}>
    <ScrollView　style={styles.aaa}>
    
        <View style={styles.container}>
            <Text  style={styles.title}>Vimのコマンド</Text>
            <View style={styles.subtitle}>
                <Text >
                    起動時
                </Text>
            </View>
            <View style={styles.subtitleDisc}>
                <Text >
                    起動時は「コマンドモード」になっています。
                </Text>
            </View>
            {/* <ClipButton onPress={toggleClip} enabled={isClipped()} /> */}
        </View>
        <FlatList
                // ここの書き方は公式のをそのまま参考
                //表示してあげたいデータの配列を入れる
                data={articles}
                // itemとはdataのなかの一項目ずつ
                renderItem={({ item }) => (
                    <VimList
                        index={item.index}
                        command={item.command}
                        explain={item.explain}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
    </ScrollView>
    // </SafeAreaView >
);
};


