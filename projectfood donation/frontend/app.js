document.addEventListener("DOMContentLoaded", () => {
  const regForm = document.getElementById("regForm");
  if (regForm) {
    regForm.addEventListener("submit", async e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(regForm));
      const res = await fetch("../backend/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const msg = await res.json();
      alert(msg.message || msg.error);
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(loginForm));
      const res = await fetch("../backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const msg = await res.json();
      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(msg.user));
        window.location = "dashboard.html";
      } else {
        alert(msg.message);
      }
    });
  }
});
