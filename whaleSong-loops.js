let input = "Under the sea, Under the sea,Darling it's better, Down where it's wetter, Take it from me";
input = input.toLowerCase();

const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++){
  for (let j = 0; j < vowels.length; j++){
    if (input[i] === vowels[j]){
      resultArray.push(input[i])
    }
}  if (input[i] === 'e'){
  resultArray.push(input[i]);
}
 if (input[i] === 'i'){
  resultArray.push(input[i]);
}
  }
console.log(resultArray.join('').toUpperCase());

//console.log(resultArray)
