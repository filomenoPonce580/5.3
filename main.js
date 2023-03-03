function printNames(names) {
  names.forEach(name => console.log(name))
}

function logTreeType(trees) {
  trees.forEach(x => console.log(x.type))
}

function totalPoints(points) {
  let total=0;
  points.forEach(x => total += x);
  return total;
}

function buildSentence(words) {
  let sentence ="";
  words.forEach(word => sentence += `${word} `);
  return sentence;
}

function logPercentages(decimals) {
  decimals.forEach((d)=>{
    console.log(`${d*100}%`);
  })
}
