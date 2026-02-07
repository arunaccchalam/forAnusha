function reveal() {
  document.getElementById("message").style.display = "block";
  document.getElementById("question").style.display = "block";
  document.getElementById("buttons").style.display = "block";
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 80 - 40;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function yesAnswer() {
  document.getElementById("buttons").style.display = "none";
  document.getElementById("finalMessage").style.display = "block";
}
