const initialHighScore = () => {
  let localHighScore = localStorage.getItem('mathBoggleHighScore')
  if(localHighScore === null){
    return 0
  }else{
    return localHighScore
  }
}

export default initialHighScore