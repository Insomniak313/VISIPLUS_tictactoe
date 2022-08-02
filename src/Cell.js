import {StyleSheet, Text, TouchableOpacity} from "react-native"

const Cell = ({isCircle, isChecked, onClick}) => (
  <TouchableOpacity onPress={onClick} style={styles.cell}>
    {isChecked ? (
      isCircle ? <Text style={styles.text}>O</Text> : <Text style={styles.text}>X</Text>
    ) : (
      <Text style={styles.text}></Text>
    )}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  cell: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 40
  }
})

export default Cell
