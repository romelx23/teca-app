import React from "react";
import { View, Text, StyleSheet,ActivityIndicator } from "react-native";
// import { ActivityIndicator } from "react-native-paper";
interface Props{
    loading:boolean
}

export default function MessageIndicator({loading}:Props) {
  if(loading){
    return (
        <View style={styles.container}>
          <View style={styles.horizontal}>
            <ActivityIndicator 
            size="large" 
            color={'#fff'}
            />
            <Text style={{color:'#fff'}}>Espere un Momento</Text>
          </View>
        </View>
      );
  }
  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '46%',
    left: '45%',
    transform: [
        { translateX: -50 },
      ],
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    backgroundColor:'transparent',
    zIndex:3,
  },
  horizontal: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor:'#6b57dd'
  },
});
