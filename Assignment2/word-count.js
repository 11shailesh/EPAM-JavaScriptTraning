function countWords(str) {
  var stingCount;
  if (str.trim().length === 0) {
    stingCount = str.trim().length;
  } else {
    stingCount = str.trim().replace(/\s+/g, ' ').split(' ').length;
  }
  return stingCount;
}