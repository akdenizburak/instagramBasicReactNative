import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PostFooterCommentsNick=()=>{
    return(
        <Text style={styles.container}>elonmusk</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: "20%",
        minWidth:"20%",
        fontSize: 15,
        color:"black",
        fontWeight: "bold",
        marginLeft:10,
        },
});

export default PostFooterCommentsNick;