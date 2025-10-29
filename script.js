// === Nature for Humanity Interactive Script ===

// Carbon counter setup
let co2 = 0;
const ratePerSecond = 0.142; // estimated CO₂ offset rate (tonnes/second)
const co2Element = document.getElementById("co2-counter");

if (co2Element) {
  setInterval(() => {
    co2 += ratePerSecond;
    co2Element.textContent = co2.toFixed(3);
  }, 1000);
}

// Smooth fade-in animation for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll("section").forEach((section) => observer.observe(section));
