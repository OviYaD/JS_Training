// const getResult = (text) => {
//   let result = "";
//   let len = text.length;
//   for (let i = 1; i <= len; i++) {
//     let slice = text.slice(len - i, len) + text.slice(0, len - i);
//     result = result + slice + "  ";
//   }
//   return result;
// };

const getResult = (text) => {
  let result = "";
  let len = text.length;
  let temp = text.slice(len - 1) + text.slice(0, len - 1);
  result += temp + " ";
  while (temp != text) {
    temp = temp.slice(len - 1) + temp.slice(0, len - 1);
    result += temp + " ";
    console.log(temp);
  }
  return result;
};

document.getElementById("rotateString").addEventListener("click", function (e) {
  e.preventDefault();
  let text = document.getElementById("inputText").value;
  document.getElementById("rotate").innerHTML = getResult(text);
  document.getElementById("swapAnime").innerHTML = text;
  let myFunc = setInterval(swap, 2000);
  let letters = text.split("");
  console.log(letters);
  function swap() {
    let last = letters.pop();
    letters.unshift(last);
    let swapped = letters.join("");
    document.getElementById("swapAnime").innerHTML = swapped;
  } 
});
