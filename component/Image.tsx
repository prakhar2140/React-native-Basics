import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <Text style = {styles.headingText}>Travel Blogs</Text>
    <View style={styles.background}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg'
          }}
        />
        <Text style={styles.text}>
          Hello, this is my first React Native App. Can you help me in learning React Native?
        </Text>
      </View>
    </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  headingText: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
    fontSize: 25,
    fontWeight: "600",
    color: "#ffffff"
  },
  container: {
    alignItems: 'center',
    padding: 16
  },
  tinyLogo: {
    width: 650,       
    height: 315,      
    resizeMode: 'contain'
  },
  background: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 16,
    textAlign: 'center'
  }
});
