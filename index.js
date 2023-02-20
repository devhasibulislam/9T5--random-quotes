/**
 * Title: Display Random Quote
 * Description: At each run display a random quote from a quote data file
 * Author: Hasibul Islam
 * Date: 21/01/2023
 */

// external import
const fs = require("fs");

// internal import
const randomDigit = require("./library/randomDigit");

const data = fs
  .readFileSync(`${__dirname}/data/Quotes.txt`, "utf8")
  .replace(/\r\n/g, "\n")
  .split("\n");

if (data) {
  const index = randomDigit(randomDigit(data.length));
  console.log(index + ":", data[index]);
} else {
  console.log(data);
}
