//get-the-middle-character
function getMiddle(s) {
  var strLength = s.length;
  var midCharIndex = 0;
  var middleString = '';
  if (strLength % 2 == 0) {
    midCharIndex = strLength / 2;
    middleString = s.substr(midCharIndex - 1, 2);
  } else {
    midCharIndex = Math.ceil(strLength / 2);
    middleString = s.substr(midCharIndex - 1, 1);
  }
  return middleString;
}