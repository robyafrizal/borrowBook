//1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

let string = "NEGIE1";
function reverse(string) {
  let word = string.split("");
  console.log(word.reverse());
}
reverse(string);

//2. Silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

const sentence = "Saya sangat senang mengerjakan soal algoritma";

function longest(sentence) {
  let words = sentence.split(" ");
  //   console.log(word);
  let longWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longWord.length) {
      longWord = words[i];
    }
  }
  return longWord;
}
console.log(longest(sentence));
// mengerjakan: 11 character

//3. Dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

function countQuery(INPUT, QUERY) {
  INPUT = ["xc", "dz", "bbb", "dz"];
  QUERY = ["bbb", "ac", "dz"];
  let OUTPUT = [];
  let result = 0;
  for (let i = 0; i < QUERY.length; i++) {
    for (let j = 0; j < INPUT.length; j++) {
      if (QUERY[i] === INPUT[j]) {
        result++;
      }
    }
    OUTPUT.push(result);
  }
  console.log(OUTPUT);
}
countQuery();
// OUTPUT = [1, 0, 2] //karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT

//4. Hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN
function diagonalDifference(arr) {
  console.log("Matrix : ", arr);

  //diagonel1
  console.log("diagonal1 : ", arr[0][0], arr[1][1], arr[2][2]);

  //diagonel2
  console.log("diagonal2 : ", arr[2][0], arr[1][1], arr[0][2]);

  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < arr.length; i++) {
    diagonal1 += arr[i][i];
    diagonal2 += arr[i][arr.length - 1 - i];
  }

  console.log(diagonal1);
  console.log(diagonal2);
  console.log(Math.abs(diagonal1 - diagonal2));
}

arr = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
diagonalDifference(arr);
