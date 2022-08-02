import {Button, StyleSheet, View} from "react-native"
import {useState} from "react"
import Cell from "./Cell"

const Board = ({size}) => {
  const [shouldDrawCircle, setShouldDrawCircle] = useState(true)
  const [cellStatus, setCellStatus] = useState(Array(size * size).fill(0))

  const onPress = (index) => {
    if (cellStatus[index] === 0) {
      setShouldDrawCircle(!shouldDrawCircle)
      cellStatus[index] = shouldDrawCircle ? -1 : 1
      setCellStatus([...cellStatus])
    }
  }

  const buildRow = (rowIndex) => {
    const tiles = []
    for (let i = 0; i < size; i++) {
      let index = rowIndex * size + i
      tiles.push(
        <Cell
          key={rowIndex + '_' + i}
          isChecked={cellStatus[index] !== 0}
          isCircle={cellStatus[index] === -1}
          onClick={() => onPress(index)}
        />
      )
    }
    return tiles
  }

  return (
    <>
      <View style={styles.column}>
        {[...Array(size).keys()].map((rowIndex) => {
          return (
            <View style={styles.row} key={rowIndex}>
              {buildRow(rowIndex)}
            </View>
          )
        })}
      </View>
      <Button
        title={'Recommencer'}
        onPress={() => setCellStatus(Array(size * size).fill(''))}
      />
    </>
  )
}

const styles = StyleSheet.create({
  column: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    marginBottom: 20
  },
  row: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
})


export default Board
