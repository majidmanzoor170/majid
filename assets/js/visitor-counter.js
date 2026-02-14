document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("visitorCounter");
  if (!el) return;

  // Count-up animation helper (same style you used)
  function animateValue(start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(start + (end - start) * progress);

      el.textContent = `👁️ Visits: ${value.toLocaleString()}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.classList.add("visitor-counter-done");
        setTimeout(() => el.classList.remove("visitor-counter-done"), 350);
      }
    }

    requestAnimationFrame(update);
  }

  // Fetch visits from GoatCounter (does NOT increment; it reads total)
  fetch("https://majid-manzoor.goatcounter.com/counter", { cache: "no-store" })
    .then((res) => res.json())
    .then((data) => {
      const endValue = typeof data.count === "number" ? data.count : 0;
      animateValue(0, endValue, 1200);
    })
    .catch((err) => {
      console.error("Visitor counter error:", err);
      // fallback
      el.textContent = "👁️ Visits: —";
    });
});
