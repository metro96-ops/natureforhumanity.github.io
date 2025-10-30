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

// === Mobile Navbar Toggle ===
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// === Animated Counter ===
const counters = document.querySelectorAll(".count");
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 150;
    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };
  updateCount();
});

// === Mobile Navbar Toggle ===
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
