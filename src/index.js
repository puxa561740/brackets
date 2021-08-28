module.exports = function check(str, conf) {
  // your solution
  let confObj = {}
  let arrSer = []
  if(str.length % 2 === 1) {
    return false
  }

  for(let i = 0; i < conf.length; i++) {
    confObj[conf[i][0]] = conf[i][1]
  }

  for(let i = 0; i < str.length; i++) {
    for(let g in confObj) {
       if(g === str[i] && g !== confObj[g]) {
        arrSer.push(g)
      } else if (g === confObj[g] && g === str[i]){
        if(arrSer.length > 0 && arrSer[arrSer.length -1] === g) {
          arrSer.pop()
        }else {
          arrSer.push(g)
        }
      } else if(confObj[g] === str[i] && arrSer.length > 0 && arrSer[arrSer.length-1] === g) {
        arrSer.pop()
      }
      
    }
  }
  if(arrSer.length > 0) {
    return false
  }
  if(arrSer.length === 0) {
    return true
  }
}
