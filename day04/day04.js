const fs = require("fs");
const lines = fs.readFileSync("day04.txt", { encoding: "utf-8" }).split(/\n\n/);
let newLines = [];
let validPassports = [];

function formatLines() {
  for (let i = 0; i < lines.length; i++) {
    let newLine = lines[i].split(/[(" ")|\n]/);
    let newString = newLine.join("");
    let containsCID = newString.includes("cid:");
    if (newLine.length === 7 && !containsCID) {
      newLines.push(newLine);
    }
    newLine.length === 8 && newLines.push(newLine);
  }
}

formatLines();

console.log(newLines);
// function checkPassports() {
//   for (let i = 0; i < newLines.length; i++) {
//     newLines[i].map((arrayItem) => {
//       if (arrayItem.includes("byr:")) {
//         let passPortValue = arrayItem.split(":");
//         passPortValue[1].length == 4 &&
//           Number(passPortValue[1]) >= 1920 &&
//           Number(passPortValue[1]) <= 2002 &&
//           isValidPassports.push(true);
//       } else if (arrayItem.includes("iyr:")) {
//         let passPortValue = arrayItem.split(":");
//         passPortValue[1].length == 4 &&
//           Number(passPortValue[1]) >= 2010 &&
//           Number(passPortValue[1]) <= 2020 &&
//           validPassports.push(newLines[i]);
//       } else if (arrayItem.includes("eyr:")) {
//         let passPortValue = arrayItem.split(":");
//         passPortValue[1].length == 4 &&
//           Number(passPortValue[1]) >= 2020 &&
//           Number(passPortValue[1]) <= 2030 &&
//           validPassports.push(newLines[i]);
//       } else if (arrayItem.includes("hgt:")) {
//         let passPortValue = arrayItem.split(":");
//         let isInch = passPortValue.includes("in");
//         let inchValue = isInch && passPortValue[1].split("i");
//         let isCm = passPortValue.includes("cm");
//         let cmValue = isCm && passPortValue[1].split("c");
//         (isInch && Number(inchValue[0]) >= 59 && Number(inchValue[0]) <= 76) ||
//           (isCm &&
//             Number(cmValue[0]) >= 150 &&
//             Number(cmValue[0]) <= 193 &&
//             validPassports.push(newLines[i]));
//       } else {
//         // console.log("kein treffer");
//       }
//     });

//     let valueChecker = (arr) => arr.every(Boolean);
//     value
//   }
// }

// checkPassports();
// console.log(
//   "🚀 ~ file: day04.js ~ line 6 ~ validPassports",
//   validPassports.length
// );
