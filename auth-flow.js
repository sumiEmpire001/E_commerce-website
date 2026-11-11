/* Original AnEmpire multi-stage form, repaired without pretending to create accounts.
 * A real authentication backend must be configured before registration/login can succeed.
 */
(() => {
  "use strict";
  const signup = document.getElementById("signup-form");
  const signin = document.getElementById("signin-form");
  if (signup) {
    const stages = [...signup.querySelectorAll(".stage")];
    const indicators = [...signup.querySelectorAll(".stage-number")];
    const status = document.getElementById("signup-status");
    let current = 0;
    function show(index) {
      current = index;
      stages.forEach((stage, i) => {
        stage.hidden = i !== index;
        stage.style.display = i === index ? "block" : "none";
      });
      indicators.forEach((item, i) => {
        item.classList.toggle("active", i === index);
        if (i === index) item.setAttribute("aria-current", "step");
        else item.removeAttribute("aria-current");
      });
      status.textContent = "";
    }
    function validStage(index) {
      for (const field of stages[index].querySelectorAll("input, select, textarea")) {
        if (!field.checkValidity()) {
          field.reportValidity();
          field.focus();
          return false;
        }
      }
      return true;
    }
    signup.querySelectorAll(".next-btn").forEach(button => button.addEventListener("click", () => {
      if (validStage(current) && current < stages.length - 1) show(current + 1);
    }));
    signup.addEventListener("submit", event => {
      event.preventDefault();
      if (!validStage(current)) return;
      const password = document.getElementById("password").value;
      const confirm = document.getElementById("confirmPassword").value;
      if (password !== confirm) {
        status.textContent = "Passwords do not match.";
        document.getElementById("confirmPassword").focus();
        return;
      }
      status.textContent = "Registration is not yet available. A secure account service must be connected before accounts can be created.";
    });
    show(0);
  }
  if (signin) {
    const status = document.getElementById("signin-status");
    signin.addEventListener("submit", event => {
      event.preventDefault();
      if (!signin.reportValidity()) return;
      status.textContent = "Sign in is not yet available. The secure account service has not been connected.";
    });
  }
})();
