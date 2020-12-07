const fs = require("fs");
const boardingPasses = fs
  .readFileSync("day05.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let seatIDs = [];
let missingNumbers = [];

function getSeat(seatBSP) {
  //128 rows in the plain
  const rangeRow = {
    start: 0,
    end: 127,
  };
  //8 seats per row
  const rangeSeat = {
    start: 0,
    end: 7,
  };
  const textToArray = seatBSP.split("");
  for (let i = 0; i < seatBSP.length; i++) {
    if (seatBSP[i] == "F") {
      let newRanger = rangeRow.end - rangeRow.start;
      rangeRow.end =
        newRanger % 2 > 0
          ? rangeRow.start + (newRanger - 1) / 2
          : rangeRow.start + newRanger / 2;
    } else if (seatBSP[i] == "B") {
      let newRanger = rangeRow.end - rangeRow.start;
      rangeRow.start =
        newRanger % 2 > 0
          ? (newRanger - 1) / 2 + rangeRow.start + 1
          : newRanger / 2 + rangeRow.start + 1;
    } else if (seatBSP[i] == "L") {
      let newRanger = rangeSeat.end - rangeSeat.start;
      rangeSeat.end =
        newRanger % 2 > 0
          ? rangeSeat.start + (newRanger - 1) / 2
          : rangeSeat.start + newRanger / 2;
    } else if (seatBSP[i] == "R") {
      let newRanger = rangeSeat.end - rangeSeat.start;
      rangeSeat.start =
        newRanger % 2 > 0
          ? (newRanger - 1) / 2 + rangeSeat.start + 1
          : newRanger / 2 + rangeSeat.start + 1;
    }
  }

  let row = rangeRow.start == rangeRow.end ? rangeRow.start : "Fehler";
  let seat = rangeSeat.start == rangeSeat.end ? rangeSeat.start : "Fehler";
  let ID = row * 8 + seat;
  console.log("Your row is " + row);
  console.log("Your seat is " + seat);
  console.log("Your seatID is " + ID);
  seatIDs.push(ID);
  seatIDs.sort((a, b) => b - a);
}

function getHighestID() {
  for (let j = 0; j < boardingPasses.length; j++) {
    getSeat(boardingPasses[j]);
  }
}
getHighestID();
// get highest ID
console.log(seatIDs[0]);

function getMySeatID() {
  for (let k = 0; k < seatIDs.length; k++) {
    if (seatIDs[k] - seatIDs[k + 1] > 1)
      missingNumbers.push(seatIDs[k], seatIDs[k + 1]);
  }
}
getMySeatID();

console.log("🚀 ~ file: day05.js ~ line 76 ~ missingNumbers", missingNumbers);
