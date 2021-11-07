import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ClipButton from '../components/ClipButton';
import { useDispatch,useSelector } from 'react-redux';

const styles = StyleSheet.create({
    itemContainer: {
        height: 50,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: 'row',
        // flexDirection: 'column' ,
        marginTop:30,
        backgroundColor:'#fff'
    },
    command: {
        marginTop:6,
        marginLeft:20,
        fontFamily: "Courier",
        // ここで変えれる
        // https://reactnative-st.com/2020/06/26/%E3%80%90reactnative%E5%85%A5%E9%96%80%E3%80%91style%E9%9B%86_%E5%BD%B1%E3%81%AE%E4%BB%98%E3%81%91%E6%96%B9%E3%83%9C%E3%83%BC%E3%83%80%E3%83%BC%E3%81%AE%E8%A1%A8%E7%A4%BA%E3%83%95%E3%82%A9%E3%83%B3/
    },
    explain: {
        color:'red',
        marginTop:4,
        marginLeft:20,
    },
    favorite:{
        textAlign: 'left' ,
    },
    rightContainer:{
        flexDirection: 'column',
    }
});

// const dispatch = useDispatch();

// const user = useSelector((state) => state.user);

// const { clips } = user;

// const isClipped = () => {
//     // 配列の中に要素があるかを確認するときにsomeを使う
//     return clips.some((clip) => clip.url === vim.url);
// }

// const toggleClip = () => {
//     if(isClipped()){
//         dispatch(deleteClip({ clip: vim }));
//     } else{
//         dispatch(addClip({clip: VimDetail}));
//     }
// }


const ListItem = ({ command, explain,index}) => {
    return (
        <View style={styles.itemContainer}>
            {/* <Text>{index}</Text> */}
            <ClipButton  style={styles.favorite}/>
                {/* <ClipButton onPress={toggleClip} enabled={isClipped()} /> */}
            <View style={styles.rightContainer}>
                <Text style={styles.command}>{command}</Text>
                <Text style={styles.explain}>{explain}</Text>
            </View>
        </View>
    );
};

export default ListItem;