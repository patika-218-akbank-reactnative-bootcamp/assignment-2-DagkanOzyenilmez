import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";

import HeaderBar from "./src/components/HeaderBar";
import MessageDisplay from "./src/components/MessageDisplay";

const App = () => {
  return(
    <View>
        <HeaderBar/>
        <ScrollView>
           <MessageDisplay
           user={{
            imageUrl: "https://picsum.photos/200/200",
            name: "Dagkan",
            messageDisplay: "Ödevi halledebildin mi ?",
            messageDate: "Yesterday"
           }}
           />
        </ScrollView>
    </View>
  )
}

export default App;
