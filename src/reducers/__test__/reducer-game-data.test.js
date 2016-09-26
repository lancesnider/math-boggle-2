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
       equation: [2, "-", 5, "="]
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: "-"
    },
    expectedGameData: {
      equation: [2, "-", 5, "=", "-"]
    }
  },
  {
    gameData: {
       equation: []
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: "-"
    },
    expectedGameData: {
      equation: ["-"]
    }
  },
  {
    gameData: {
       equation: [2, "*", "-", 2]
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: "*"
    },
    expectedGameData: {
      equation: [2, "*", "-", 2, "*"]
    }
  },
  {
    gameData: {
       equation: []
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: "*"
    },
    expectedGameData: equationOverGameData
  },
  {
    gameData: {
       equation: [5, "-"]
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: "*"
    },
    expectedGameData: equationOverGameData
  },
  {
    gameData: {
       equation: [5, "-", "*"]
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: 2
    },
    expectedGameData: equationOverGameData
  },
  // Easy equations
  {
    gameData: {},
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: 0
    },
    expectedGameData: {
      ...equationOverGameData,
      feedback: T.texts.feedback.zero
    }
  },
  {
    gameData: {
      equation: [5, "^"]
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: 0
    },
    expectedGameData: {
      ...equationOverGameData,
      feedback: T.texts.feedback.zero
    }
  },
  {
    gameData: {
      equation: [0, "^"]
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: 5
    },
    expectedGameData: {
      ...equationOverGameData,
      feedback: T.texts.feedback.zero
    }
  },
  {
    gameData: {
      equation: [3,3]
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: "="
    },
    expectedGameData: {
      ...equationOverGameData,
      feedback: T.texts.feedback.tooShort
    }
  },
  // Complete and pending equations
  {
    gameData: {
      equation: [7, "+", 1, "*", 9, "-", 3, "*", 8, "-", 4, "=", "-", 1]
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: 2
    },
    expectedGameData: {
      ...equationOverGameData,
      feedback: "+30",
      score: 30
    }
  },
  {
    gameData: {
      equation: [7, "+", 1, "*", 9, "-", 3, "*", 8, "-", 4, "=", "-", 1]
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: 3
    },
    expectedGameData: {
      ...equationOverGameData,
      feedback: T.texts.feedback.incorrect
    }
  },
  {
    gameData: {
      equation: [7, "+", 1, "*", 9, "-", 3, "*", 8, "-", 4, "=", "-"]
    },
    action: {
      type: 'CLICK_CALCULATOR',
      itemClicked: 1
    },
    expectedGameData: {
      equation: [7, "+", 1, "*", 9, "-", 3, "*", 8, "-", 4, "=", "-", 1]
    }
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
