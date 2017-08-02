function countWords(str) {
  var arrayCount = str.match(/\S+/g);;
  var strCount = 0;
  console.log(arrayCount);
  for(var i = 0; i < arrayCount.length ; i++){
    if(!arrayCount[i] == ''){
     strCount = strCount + 1;
    }
    
  }
  return strCount;
}

