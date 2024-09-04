import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SLog, { LogType } from './src/services/SLog';
import SFirebase from './src/services/SFirebase';

export default function App() {

  // component là một hàm trả về dữ liệu là element
  // SLog.log(LogType.Warning, "test", "test log service");
  SFirebase.trackNotification(1, () => {console.log("ABC");}, () => {console.log("XYZ");}, () => {console.log("DONE")});

  return (
    <View style={styles.container}> 
      <Text>nq</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
