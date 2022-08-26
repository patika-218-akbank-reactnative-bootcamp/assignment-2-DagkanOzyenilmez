import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import styles from "./styles";

const MessageDisplay = ({props}) => {

    const {imageUrl, name, messageDisplay, messageDate } = props.user;

    return(
            <View style={styles.divider}>
                    <Image style={styles.profile_image}
                    source={{imageUrl}}
                    />  
                    <View style={styles.column}>
                    <Text style={styles.name_text}
                    > 
                        {name}
                    </Text>
                    <Text style={styles.messageDisplay}
                    > 
                        {messageDisplay}
                    </Text>   
                    </View>     
                    <Text style={styles.messageDate}
                    > 
                        {messageDate}
                    </Text>         
            </View>
    )
}

export default MessageDisplay;