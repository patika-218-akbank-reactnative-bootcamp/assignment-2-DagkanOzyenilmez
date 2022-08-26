import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";

import HeaderBar from "./src/components/HeaderBar";
import MessageList from "./src/components/MessageList";


const App = () => {
  return(
    <View>
        <HeaderBar/>
        <MessageList/>
    </View>
  )
}

export default App;
