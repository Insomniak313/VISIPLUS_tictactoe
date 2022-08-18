import {StyleSheet, Text, TouchableOpacity} from "react-native"
import {useContext} from "react"
import {ThemeContext} from "./ThemeWrapper"

const Cell = ({isCircle, isChecked, onClick}) => {
  const {theme} = useContext(ThemeContext)

  const styles = StyleSheet.create({
    cell: {
      borderColor: 'black',
      borderStyle: 'solid',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.buttonColor,
      width: 100,
      height: 100,
    },
    text: {
      fontSize: 40,
      color: theme.color,
    }
  })

  return (
    <TouchableOpacity onPress={onClick} style={styles.cell}>
      {isChecked ? (
        isCircle ? <Text style={styles.text}>O</Text> : <Text style={styles.text}>X</Text>
      ) : (
        <Text style={styles.text}></Text>
      )}
    </TouchableOpacity>
  )
}



export default Cell
