import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useColorScheme
} from 'react-native';

function App() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const backgroundStyle = {
    flex: 1,
    paddingHorizontal: 2,
  };

  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <View style={backgroundStyle}>
          <Text style={[styles.headingText, textStyle]}>Flat Cards</Text>
          <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
              <Text style={textStyle}>Red</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
              <Text style={textStyle}>Blue</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
              <Text style={textStyle}>Green</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  headingText:{
      paddingTop: 40,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 4,
  },
  cardOne: {
    backgroundColor: '#B71C1C',
  },
  cardTwo: {
    backgroundColor: '#0D47A1',
  },
  cardThree: {
    backgroundColor: '#1B5E20',
  },
});
