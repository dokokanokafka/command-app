import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    itemContainer: {
        // height: 100,
        // width: '70%',
        // borderColor: 'gray',
        borderWidth: 1,
        flexDirection: "row", // これがないとコンポーネントが真っ青になる
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginLeft: 100,
        marginRight: 100,
    },
    leftContainer: {
        width: 100,
    },
    rightContainer: {
        flex: 1,
        padding: 10,
        justifyContent: "space-between",
    },
    text: {
        fontSize: 16
    },
    subText: {
        fontSize: 12,
        color: "gray"
    },
});

const ListItem = ({ title, author, onPress }) => {
// const ListItem = ({ imageUrl, title, author, onPress }) => {
    return (
        //onPressされたら親側にonPressを返す
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
            <View style={styles.leftContainer}>
                {/* <Image style={{ width: 100, height: 100 }} /> */}
                {/* <Image style={{ width: 100, height: 100 }} source={{ uri: imageUrl }} /> */}

            </View>
            <View style={styles.rightContainer}>
                <Text numberOfLines={3} style={styles.text}>
                    {title}
                </Text>
                <Text style={styles.subText}>{author}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ListItem;