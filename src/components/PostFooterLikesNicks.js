import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PostFooterLikesNicks=()=>{
    return(
        <Text style={styles.container}>akdenizburakk and other people liked</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "70%",
        height: 20,
        fontSize: 15,
        color:"black",
        fontWeight: "bold",
        textAlign:"right",
        marginLeft:-50
        },
});

export default PostFooterLikesNicks;