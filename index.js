function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string) {
  let newvar = string.toUpperCase()
  return console.log(newvar)
}

function logWhisper(string) {
  let newvar = string.toLowerCase()
  return console.log(newvar)
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return console.log("I can't hear you!")
  }
}