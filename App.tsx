import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ElevatedCards from './component/Elevated';
import Flapcard from './component/Flapcards';
import Image from './component/Image';
import Blogs from './component/Blogs';
import ContactList from './component/ContactList';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ElevatedCards />
        <Flapcard />
        <Image />
        <Blogs />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
