function solution(queries) {
    const database = {}
    const returnArray =  []  
    for (const q  of queries){
        if(q[0]=="SET_OR_INC"){
            if(database.hasOwnProperty(q[1])){
               if(database[q[1]].hasOwnProperty(q[2])){
                   database[q[1]][q[2]] = parseInt(database[q[1]][q[2]])+parseInt(q[3])                
               }
               else{
                   database[q[1]][q[2]] = q[3]
               }          
            }
            else{
                database[q[1]] = {}
                database[q[1]][q[2]]=q[3]               
            }
        returnArray.push(`${database[q[1]][q[2]]}`)
        }
        else if(q[0]=="GET"){
            if(database.hasOwnProperty(q[1])){
                if(database[q[1]].hasOwnProperty(q[2])){
                    returnArray.push(`${database[q[1]][q[2]]}`)
                }
                else{
                    returnArray.push("")
                }
            }
            else{
                returnArray.push("")
            }
        }
        else{
            if(database.hasOwnProperty(q[1])){
                if(database[q[1]].hasOwnProperty(q[2])){
                    delete database[q[1]][q[2]]
                    returnArray.push("true")
                }
                else{
                    returnArray.push("false")
                }
            }
            else{
                returnArray.push("false")
            }
        }
    }
    return returnArray
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
    ["SET_OR_INC", "a", "1", "2"],
    ["GET", "a", "1"],
    ["SET_OR_INC", "a", "1", "2"],
    ["GET", "a", "1"],
    ["SET_OR_INC", "a", "1", "2"],
    ["GET", "a", "1"],
    ["SET_OR_INC", "a", "1", "2"],
    ["GET", "a", "1"],
    ["SET_OR_INC", "a", "1", "2"],
    ["GET", "a", "1"],
    ["SET_OR_INC", "a", "1", "2"],
    ["GET", "a", "1"]
  ]

console.log(solution(queries))