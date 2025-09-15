// Function with parameter and return value
function showGreeting(name) {
  const message = `Hello, ${name}!`;
  document.getElementById("greeting").textContent = message;
  return message;
}

// Function to trigger CSS animation
function triggerAnimation() {
  const box = document.getElementById("box");
  box.classList.add("slide-in");
}

// Event listener to trigger animation
document.getElementById("animateBtn").addEventListener("click", triggerAnimation);

// Scope demonstration
function outerFunction() {
  let outerVar = "I'm outside!";
  function innerFunction() {
    let innerVar = "I'm inside!";
    console.log(outerVar); // Accessible
    console.log(innerVar); // Accessible
  }
  innerFunction();
  // console.log(innerVar); // Not accessible here
}
outerFunction();
