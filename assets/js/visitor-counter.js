document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("visitorCounter");
  if (!el) return;

  // Unique namespace for your site
  const namespace = "majidmanzoor170_majid_site";

  fetch(`https://api.countapi.xyz/hit/${namespace}/visits`)
    .then((res) => res.json())
    .then((data) => {
      el.innerHTML = `Visits: ${data.value}`;
    })
    .catch(() => {
      el.innerHTML = "";
    });
});
