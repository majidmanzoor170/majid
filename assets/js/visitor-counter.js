document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("visitorCounter");
  if (!el) return;

  const ENDPOINT = "https://majid-manzoor.goatcounter.com/counter/TOTAL.json";

  function animateValue(start, end, duration) {
    const startTime = performance.now();
    function tick(now) {
      const p = Math.min((now - startTime) / duration, 1);
      const val = Math.floor(start + (end - start) * p);
      el.textContent = `👁️ Visits: ${val.toLocaleString()}`;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  fetch(ENDPOINT, { cache: "no-store" })
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then((data) => {
      // GoatCounter returns: { count: "1,234", ... }
      const total = Number(String(data.count || "0").replace(/,/g, ""));
      animateValue(0, total, 900);
    })
    .catch((e) => {
      console.error("GoatCounter counter fetch failed:", e);
      el.textContent = "👁️ Visits: —";
    });
});
