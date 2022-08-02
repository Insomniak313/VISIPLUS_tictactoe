import {StyleSheet, Text, View} from 'react-native'
import Board from "./src/Board"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Board size={3}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 40,
    marginBottom: 20
  }
})
