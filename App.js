import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
        <View style={styles.header}>
          <Text>hello</Text>
         

        </View>
        <View style={styles.body}>
            <Text>hi how r u</Text>
            </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30
  },

  header:{
    backgroundColor:'yellow',
    padding:5,
    marginBottom:10
  },
  body:{
    backgroundColor:'pink',
    padding:5
  }
});
