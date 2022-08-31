function capitalCase(sentence) {
  let words = sentence.split(" ");
  let result = "";
  words.forEach(function (word) {
    result += word[0].toUpperCase() + word.slice(1) + " ";
  }); //reduce
  return result;
}

document.getElementById("getSentence").addEventListener("click", function (e) {
  e.preventDefault();
  let sentence = document.getElementById("sentence").value;
  document.getElementById("capitalize").innerHTML = capitalCase(sentence);
});
