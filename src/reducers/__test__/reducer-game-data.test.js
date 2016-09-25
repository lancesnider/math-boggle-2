import reducerGameData, {defaultGameData, equationOverGameData}  from '../reducer-game-data.js'
import T from 'i18n-react'
import Texts from '../../texts.js'

let tests = [
  {
    // Check adjacent tiles
    gameData: {
      clickedTiles: [0,1,2,3,4]
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: 9,
      tileClicked: 5
    },
    expectedGameData: equationOverGameData
  },
  {
    gameData: {
      clickedTiles: [0,1,2,3,4]
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: 2,
      tileClicked: 8
    },
    expectedGameData: {
      equation: [2],
      clickedTiles: [0,1,2,3,4,8]
    }
  },
  // Check for valid equation
  {
    gameData: {
       equation: []
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: "*"
    },
    expectedGameData: equationOverGameData
  }
]

const getUpdatedExpectedData = (test) => {
  let startingameData = Object.assign({}, defaultGameData, test.gameData)
  let returnedGameData = reducerGameData(startingameData, test.action)
  let updatedGameData = Object.assign({}, startingameData, returnedGameData)
  let expectedGameData = Object.assign({}, startingameData, test.expectedGameData)
  return {
    updatedGameData: updatedGameData,
    expectedGameData: expectedGameData
  }
}

it('correctly validates the equation', () => {

  for(let test in tests){
    let data = getUpdatedExpectedData(tests[test])
    expect(data.updatedGameData).toEqual(data.expectedGameData)
  }

})
