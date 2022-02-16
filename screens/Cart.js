import React from "react";
import {View, SafeAreaView, Text, StyleSheet} from "react-native";

export default function Cart(props){
    return(
        <SafeAreaView
        style={{
            flex: 1,
            backgroundColor: "white",
          }}
        >
           <View><Text> Cart </Text></View> 
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header: {
      paddingHorizontal: 20,
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
  
    title: {
      marginTop: 10,
    },
  });
  