const sentence = "hello there from lighthouse labs";
let delay = 0;
const increment = 50
for (const i of sentence) {
  setTimeout(() => {
    process.stdout.write(i)
  }, delay);
  delay += increment;
}
const endBreak = (increment * sentence.length);
setTimeout(() => {
 console.log("\n");
},endBreak)
