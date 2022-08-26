import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import styles from "./styles";

const MessageDisplay = ({user}) => {
    return(
            <View style={styles.divider}>
                    <Image style={styles.profile_image}
                    source={{
                        uri: user.imageUrl,
                    }}
                    />  
                    <View style={styles.column}>
                    <Text style={styles.name_text}
                    > 
                        {user.name}
                    </Text>
                    <Text style={styles.messageDisplay}
                    > 
                        {user.messageDisplay}
                    </Text>   
                    </View>     
                    <Text style={styles.messageDate}
                    > 
                        {user.messageDate}
                    </Text>         
            </View>
    )
}

export default MessageDisplay;