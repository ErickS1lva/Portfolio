document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-num");

  counters.forEach(counter => {
    counter.innerText = "0";
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      // Velocidade da animação
      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCount();
  });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
