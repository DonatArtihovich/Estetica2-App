import React, { useEffect, useState } from 'react';
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BootSplash from "react-native-bootsplash";

function App(): React.JSX.Element {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsReady(true), 3000);
  }, [])

  useEffect(() => {
    if (isReady) {
      BootSplash.hide({ fade: true });
    }
  }, [isReady])

  return (
    <SafeAreaView style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>LORD PIDOR</Text>
      <Button title={'btn'} onPress={() => Alert.alert('ALERT', 'press option', [
        { text: 'title', onPress: () => console.log('press') },
        { text: 'cancel', onPress: () => console.log('pressed') }
      ])}
      />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
