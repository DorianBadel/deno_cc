const decoder = new TextDecoder("utf-8");

const data = await Deno.readFile("./hello.txt");

console.log("data", decoder.decode(data));

//write files

const newText = "Hello world, from files.js";
const encoder = new TextEncoder();
await Deno.writeFile("./hello.txt", encoder.encode(newText));
//await Deno.writeTextFile('hello.txt',newText);

const renameConfirmation = confirm("Do you want to rename the file?");

if (renameConfirmation) {
  await Deno.rename("./hello.txt", "./greetings.txt");
} else {
  console.log("File not found");
}

const removeConfirmation = confirm("Do you wanna");

if (removeConfirmation) {
  await Deno.remove("./greetings.txt");
} else console.log("no");
