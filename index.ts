// This is our main function

import * as readline from 'readline';
function fizzbuzz(numb: number, rules : {[key: number] :boolean }) : void {
   const output: string[] = [];
   for (let i = 1; i <= numb; i++) {
       let answer : string[] = [];
       if ( i % 11 == 0 && rules[11] === true) {
           answer.push("Bong");
       }
       else {
           if (i % 3 === 0 && rules[3] === true) {
               answer.push("Fizz");
           }
           if (i % 5 === 0 && rules[5] === true) {
               answer.push("Buzz");
           }

           if (i % 7 === 0 && rules[7] === true) {
               answer.push("Bang");
           }
       }

       if (i % 13 === 0 && rules[13] === true) {
           let index = answer.findIndex(object => object.startsWith("B"));
           if(index === -1) {
               answer.push("Fezz");
           } else {
               answer.splice(index, 0, "Fezz");
           }
       }

       if (i % 17 == 0 && rules[17] === true) {
           answer.reverse().join("");
       }
       if (answer.length === 0) {
           answer.push(i.toString());
       }
       output.push(answer.join(""));
   }
   console.log(output.join(", "));
}

function getUserInput() : void {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let rules : { [key: number] : boolean } = {};
    rl.question("Write a number", (numb) => {
        readRule();
        function readRule() {
            rl.question("write a rule that you want to be active", (rule) => {
                if (rule.length === 0) {
                    rl.close();
                    fizzbuzz(Number(numb), rules);
                } else {
                    rules[parseInt(rule)] = true;
                    readRule();
                }
            });
        }
    });
}

getUserInput();
