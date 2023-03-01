import readline from "readline";
import fs from "fs";
import c from "ansi-colors";

if(process.argv[2]){
    const fileName = process.argv[2];
    const colors = ["red", "blue", "black", "green", "yellow", "cyan", "magenta"];
    const readFileLineByLine = async () => {
      const fileStream = fs.createReadStream(fileName);
      const rl = readline.createInterface({
        input: fileStream,
      });
      for await (const line of rl) {
        const rNumber = Math.floor(Math.random() * (colors.length - 1));
        const rColor = colors[rNumber];
        console.log(c[rColor](line));
      }
    };
    readFileLineByLine();
}else{
    console.log("Enter an argument!")
}


