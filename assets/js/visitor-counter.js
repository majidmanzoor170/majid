document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("visitorCounter");
  if (!el) return;

  // Unique namespace for your site (any string, but keep it stable)
  const namespace = "majidmanzoor170_majid_site";

  // Count-up animation helper
  function animateValue(start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0 → 1
      const value = Math.floor(start + (end - start) * progress);

      el.textContent = `👁️ Visits: ${value.toLocaleString()}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        // Small pulse at the end
        el.classList.add("visitor-counter-done");
        setTimeout(() => el.classList.remove("visitor-counter-done"), 350);
      }
    }

    requestAnimationFrame(update);
  }

  // Fetch + increment visits using countapi.xyz
  fetch(`https://api.countapi.xyz/hit/${namespace}/visits`)
    .then((res) => res.json())
    .then((data) => {
      const endValue = data && data.value ? data.value : 0;
      // Animate from 0 → visits
      animateValue(0, endValue, 1200);
    })
    .catch((err) => {
      console.error("Visitor counter error:", err);
      // Fallback (no animation, just static text) if API fails
      el.textContent = "";
    });
});
