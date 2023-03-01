import readline from "readline";
import process from "process";

const rL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rL.question('Enter number 1 :',(num1)=>{
    rL.question('Enter number 2 :',(num2)=>{
        const result = Number(num1) + Number(num2);
        console.log(`Answer: ${result}`);
        rL.close();
    })
})