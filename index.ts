// This is our main function

import * as readline from 'readline';
function fizzbuzz(numb: number, rulefor3: string, rulefor5:string, rulefor13:string): void {
    let rules : { [key: number] :string } = {};
    rules[3] = rulefor3;
    rules[5] = rulefor5;
    rules[7] = "Bang";
    rules[11] = "Bong";
    rules[13] = rulefor13;
   let output: string[] = [];
   for (let i = 1; i <= numb; i++) {
       let answer = "";
       if ( i % 11 == 0)
           answer += rules[11];
       else {
           if (i % 15 === 0)
               answer += "FizzBuzz";
           else {
               if (i % 3 === 0)
                   answer += rules[3];
               if (i % 5 === 0)
                   answer += rules[5];
               if (i % 7 === 0)
                   answer += rules[7];
           }
       }

       if (i % 13 === 0) {
           const index = answer.indexOf("B");
           if(index === -1)
               answer += rules[13];
           else
               answer = answer.slice(0, index) + rules[13] + answer.slice(index);
       }

       if (i % 17 == 0)
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
    rl.question("Say rule for number 3 : ", (rulefor3) => {
       rl.question("Say rule for number 5: ", (rulefor5) => {
           rl.question("Say rule for number 13", (rulefor13) => {
               fizzbuzz(parseInt(numb), rulefor3, rulefor5, rulefor13);
               rl.close();
           });
       });
    });
});