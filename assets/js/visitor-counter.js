document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("visitorCounter");
  if (!el) return;

  const namespace = "majidmanzoor170_majid_site";

  function animateValue(start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(start + (end - start) * progress);
      el.textContent = `👁️ Visits: ${value}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.classList.add("visitor-counter-done");
        setTimeout(() => el.classList.remove("visitor-counter-done"), 300);
      }
    }
    requestAnimationFrame(update);
  }

  fetch(`https://api.countapi.xyz/hit/${namespace}/visits`)
    .then((res) => res.json())
    .then((data) => animateValue(0, data.value, 1000))
    .catch(() => {});
});
