import React from "react";
import { View, FlatList } from "react-native";

import MessageDisplay from "../MessageDisplay";
import Messages from "./Messages"; 
import styles from "./styles";

const MessageList = (props) => {

    return(
        <View style={styles.container}>
            <FlatList
            data={Messages}
            renderItem={({item}) => <MessageDisplay messages={item} />}
            />
        </View>
    )
}

export default MessageList;