document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("visitorCounter");
  if (!el) return;

  function animateValue(start, end, duration) {
    const startTime = performance.now();
    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(start + (end - start) * progress);
      el.textContent = `👁️ Visits: ${value.toLocaleString()}`;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // GoatCounter public JSON stats endpoint
  fetch("https://majid-manzoor.goatcounter.com/counter.json", { cache: "no-store" })
    .then((r) => r.json())
    .then((data) => {
      // Total visits
      const total = Number(data.count_total || 0);
      animateValue(0, total, 900);
    })
    .catch((e) => {
      console.error("GoatCounter fetch failed:", e);
      el.textContent = "👁️ Visits: —";
    });
});
