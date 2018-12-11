import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.container}
          source={{ uri: "https://ttvflash-2b993.firebaseapp.com/" }}
        />
        <StatusBar hidden />
      </View>
    );
  }
}
