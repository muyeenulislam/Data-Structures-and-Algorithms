// always work with the worst case
// Worst Case: n
const fish = ["dory", "bruce", "marlin", "nemo"];
const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(100000).fill("nemo");

const findNemo = (fish) => {
  let t0 = performance.now();
  for (let i = 0; i < fish.length; i++) {
    console.log("running");
    if (fish[i] === "nemo") {
      console.log("Found NEMO!");
      break;
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
};

findNemo(large);
