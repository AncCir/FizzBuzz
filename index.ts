// This is our main function

import * as readline from 'readline';
function fizzbuzz(numb: number, rulefor3: string, rulefor5:string, rulefor7:string ,rulefor11: string, rulefor13: string, rulefor17: string): void {
    let rules : { [key: number] :string } = {};
    if(rulefor3 === "y")
     rules[3] = "Fizz";
    else
        rules[3] = "n";

    if(rulefor5 === "y")
        rules[5] = "Buzz";
    else
        rules[5] = "n";

    if(rulefor7 === "y")
        rules[7] = "Bang";
    else
        rules[7] = "n";

    if(rulefor11 === "y")
        rules[11] = "Bong";
    else
        rules[11] = "n";

    if(rulefor13 === "y")
        rules[13] = "Fezz";
    else
        rules[13] = "n";

    if(rulefor17 === "y")
        rules[17] = "y";
    else
        rules[17] = "n";
   let output: string[] = [];
   for (let i = 1; i <= numb; i++) {
       let answer = "";
       if ( i % 11 == 0 && rules[11] != "n")
           answer += rules[11];
       else {
           if (i % 15 === 0 && rules[3] != "n" && rules[5] != "n")
               answer += "FizzBuzz";
           else {
               if (i % 3 === 0 && rules[3] != "n")
                   answer += rules[3];
               if (i % 5 === 0 && rules[5] != "n")
                   answer += rules[5];
               if (i % 7 === 0 && rules[7] != "n")
                   answer += rules[7];
           }
       }

       if (i % 13 === 0 && rules[13] != "n"){
           const index = answer.indexOf("B");
           if(index === -1)
               answer += rules[13];
           else
               answer = answer.slice(0, index) + rules[13] + answer.slice(index);
       }

       if (i % 17 == 0 && rules[17] != "n")
           answer = answer.split(/(?=[A-Z])/).reverse().join("");
       if (answer === "")
           answer = i.toString();
       output.push(answer);
   }
   console.log(output.join(", "));
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Now, we run the main function:
rl.question("Write a number", (numb) => {
    rl.question("rule for number 3? ", (rulefor3) => {
       rl.question("rule for number 5? ", (rulefor5) => {
           rl.question("rule for number 7? ", (rulefor7) => {
               rl.question("rule for number 11? ", (rulefor11) : void => {
                   rl.question("rule for number 13? ", (rulefor13) : void => {
                       rl.question("rule for number 17? ", (rulefor17) : void => {
                           fizzbuzz(parseInt(numb), rulefor3, rulefor5, rulefor7, rulefor11, rulefor13,rulefor17);
                           rl.close();
                       });
                   });
               });
           });
       });
    });
});