const randomTileNumbers = () => {
  var randomNumbersArray = []
  for (var i = 0; i < 25; i++) {
    randomNumbersArray[i] = Math.floor(Math.random() * 10)
  }
  return randomNumbersArray
}

export default randomTileNumbers
