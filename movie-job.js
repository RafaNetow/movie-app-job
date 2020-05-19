var keepRunning = true;
function run() {
  if (keepRunning) {
    console.log("Test")
    setTimeout(run, "5000");
  }
}
setTimeout(run, "5000");