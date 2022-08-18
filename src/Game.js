import {Button, StyleSheet, Text, View} from 'react-native'
import {themes, ThemeContext, ThemeWrapper} from "./ThemeWrapper"
import {useContext} from "react"
import Board from "./Board"

export default function Game() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 40,
      marginBottom: 20,
      color: theme.color
    }
  })

  return (
    <View style={styles.container}>
      <Button color={theme.buttonColor} title={theme === themes.light ? '🌞' : '🌙'} onPress={() => toggleTheme()}/>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Board size={3}/>
    </View>
  )
}


