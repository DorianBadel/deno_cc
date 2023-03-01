console.log(`hello !`);

const name = prompt("enter your name: ");

const helloConfirmation = confirm("Would you like");

if (helloConfirmation) {
  await Deno.writeTextFile("hello.txt", `Hello, ${name}`);
} else {
  console.log("No file created");
}
