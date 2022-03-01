// words = () =>{
// let word ="Life is a characteristic that distinguishes physical entities that have biological processes, such as signaling and self-sustaining processes, from those that do not, either because such functions have ceased (they have died) or because they never had such functions and are classified as inanimate. Various forms of life exist, such as plants, animals, fungi, protists, archaea, and bacteria. Biology is the science that studies life.";
// let numbercount = word.match(/(\w+)/g).length;
function word(str) { 
    return str.split(" ").reduce(function(count, word) {
      count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
      const wordCount ={};
      const length = word.length;
     // console.log(wordCount.length);
      return count;
    }, {});
  } 
  
  console.log();
// } 
let para = "Life is a characteristic that distinguishes physical entities that have biological processes, such as signaling and self-sustaining processes, from those that do not, either because such functions have ceased (they have died) or because they never had such functions and are classified as inanimate. Various forms of life exist, such as plants, animals, fungi, protists, archaea, and bacteria. Biology is the science that studies life.";
let result = word(para);
console.log(para.match(/(\w+)/g).length);
console.log(result);



