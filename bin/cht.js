#!/usr/bin/env node

const readline = require("readline");

const args = process.argv.slice(2);

if (args[0] !== "cli") {
  console.log("Gunakan: cht cli");
  process.exit(0);
}

console.log("");
console.log("╔══════════════════════════════════╗");
console.log("║         ChanThecno CLI           ║");
console.log("╚══════════════════════════════════╝");
console.log("");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "cht> ",
});

rl.prompt();

rl.on("line", (input) => {
  const command = input.trim();

  if (command === "exit") {
    console.log("");
    console.log("Keluar dari ChanThecno CLI...");
    rl.close();
    return;
  }

  rl.prompt();
});
