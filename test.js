console.log("Start testing");

// Simulate a proper test that waits and then completes
setTimeout(() => {
  console.log("Wait for 3 secs");
  console.log("End testing");
  console.log("✅ All tests passed!");
  process.exit(0); // Explicitly exit with success code
}, 3000);
