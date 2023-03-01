import readline from "readline";
import process from "process";
import qrcode from "qrcode-terminal";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What will the QR code be created for? \r\n", (ans) => {
  qrcode.generate(ans, { small: true });
  rl.close();
});
