const fs = require("fs");
const groups = fs
  .readFileSync("day06.txt", { encoding: "utf-8" })
  .split("\n\n")
  .filter((x) => x);

let total = 0;
let total2 = 0;
for (const group of groups) {
  const uniques = new Set([...group.replace(/\n/g, "")]);
  total += uniques.size;

  total2 += [...uniques].filter((char) =>
    group
      .split("\n")
      .filter((x) => x)
      .every((form) => form.includes(char))
  ).length;
}

console.log(total);
console.log(total2);

//Disclaimer
//After having a solution for part 1 I struggled with part 2. Therefore I head over again to https://github.com/tpatel/advent-of-code-2020/blob/main/day06.js and was looking for help.
//So I was able to reduce my code from 80 lines to just 8. and in the end to 22. I have to experiment more with new Set and new Map.
