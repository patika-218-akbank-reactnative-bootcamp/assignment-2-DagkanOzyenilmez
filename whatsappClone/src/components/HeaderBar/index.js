import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import styles from "./styles";

const HeaderBar = () => {
    return(
        <View>
            <View style={styles.top_row}>
                <Text 
                    style={styles.edit_text}>
                    Edit
                </Text>
                <Image 
                    source={require('../../assets/new_message.png')}
                    style={styles.new_button}>
                </Image>
            </View>

            <View>
                <Text
                    style={styles.chats_text}>
                    Chats
                </Text>
            </View>

            <View style={styles.buttom_row}>
                <Text
                    style={styles.broadCast_list_text}>
                    Broadcast List
                </Text>
                <Text
                    style={styles.new_group_text}>
                    New Group
                </Text>
            </View>
            
        </View>
    )
}

export default HeaderBar;