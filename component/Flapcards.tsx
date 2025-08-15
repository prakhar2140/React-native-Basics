import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Slider Cards</Text>

        <ScrollView horizontal={true} style={styles.cardContainer} showsHorizontalScrollIndicator={false}>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.cardText}>Slider</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.cardText}>the</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.cardText}>Slide</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.cardText}>Slider</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.cardText}>the</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.cardText}>Slide</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  headingText: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: "#fff",
  },
  cardContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
    flexDirection: 'row', // Ensures horizontal layout
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  cardText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  cardOne: {
    backgroundColor: '#C8BFE7'
  },

});
