function solution(queries) {
  const database = {};
  const returnArray = [];
  for (const q of queries) {
    if (q[0] == "SET_OR_INC") {
      if (database.hasOwnProperty(q[1])) {
        if (database[q[1]].hasOwnProperty(q[2])) {
          database[q[1]][q[2]] =
            parseInt(database[q[1]][q[2]]) + parseInt(q[3]);
        } else {
          database[q[1]][q[2]] = q[3];
        }
      } else {
        database[q[1]] = {};
        database[q[1]][q[2]] = q[3];
      }
      returnArray.push(`${database[q[1]][q[2]]}`);
    } else if (q[0] == "GET") {
      if (database.hasOwnProperty(q[1])) {
        if (database[q[1]].hasOwnProperty(q[2])) {
          returnArray.push(`${database[q[1]][q[2]]}`);
        } else {
          returnArray.push("");
        }
      } else {
        returnArray.push("");
      }
    } else if (q[0] == "DELETE") {
      if (database.hasOwnProperty(q[1])) {
        if (database[q[1]].hasOwnProperty(q[2])) {
          delete database[q[1]][q[2]];
          returnArray.push("true");
        } else {
          returnArray.push("false");
        }
      } else {
        returnArray.push("false");
      }
    } else if (q[0] == "TOP_N_KEYS") {
      const n = parseInt(q[1]);
      const keys = Object.keys(database);
      if (keys.length < n) {
        returnArray.push(keys);
      } else {
        const sortedKeys = keys.sort((a, b) => {
          return (
            Object.keys(database[b]).length - Object.keys(database[a]).length
          );
        });
        const topNKeys = sortedKeys.slice(0, n);
        returnArray.push(topNKeys);
      }
    }
  }
  console.log(database);
  return returnArray;
}

// Call the function with queries array
const queries = [
  ["SET_OR_INC", "a", "1", "2"],
  ["GET", "a", "1"],
  ["SET_OR_INC", "a", "1", "2"],
  ["GET", "a", "1"],
  ["GET", "a", "1"],
  ["GET", "a", "1"],
  ["SET_OR_INC", "a", "1", "2"],
  ["GET", "a", "1"],
  ["SET_OR_INC", "a", "1", "2"],
  ["GET", "a", "1"],
  ["SET_OR_INC", "d", "1", "2"],
  ["GET", "b", "1"],
  ["SET_OR_INC", "a", "1", "2"],
  ["GET", "a", "1"],
  ["SET_OR_INC", "a", "1", "2"],
  ["GET", "a", "1"],
  ["SET_OR_INC", "a", "1", "2"],
  ["GET", "a", "1"],
  ["SET_OR_INC", "a", "1", "2"],
  ["GET", "a", "1"],
  ["SET_OR_INC", "b", "1", "2"],
  ["GET", "a", "1"],
  ["TOP_N_KEYS", "3"],
  ["SET_OR_INC", "e", "1", "2"],
  ["TOP_N_KEYS", "4"],
  
];

console.log(solution(queries));
