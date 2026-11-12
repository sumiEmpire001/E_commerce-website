/* Original AnEmpire multi-stage form, repaired without pretending to create accounts.
 * A real authentication backend must be configured before registration/login can succeed.
 */
(() => {
  "use strict";
  const signup = document.getElementById("signup-form");
  const apiPromise = import("./auth-api.mjs");
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
    signup.querySelectorAll(".back-btn").forEach(button=>button.addEventListener("click",()=>{if(current>0)show(current-1);}));
    signup.addEventListener("submit", async event => {
      event.preventDefault();
      for(let i=0;i<stages.length;i++){
        if(!validStage(i)){show(i);validStage(i);return;}
      }
      const password = document.getElementById("password").value;
      const confirm = document.getElementById("confirmPassword").value;
      if (password !== confirm) {
        status.textContent = "Passwords do not match.";
        document.getElementById("confirmPassword").focus();
        return;
      }
      const button=signup.querySelector('button[type="submit"]');
      button.disabled=true;
      try {
        const api=await apiPromise;
        if(!api.authReady())throw new Error(api.authConfigError());
        const response=await api.register({email:document.getElementById("email").value.trim(),password,username:document.getElementById("username").value.trim(),firstName:document.getElementById("firstName").value.trim(),lastName:document.getElementById("lastName").value.trim()});
        status.textContent=response.access_token?"Account created. You can now sign in.":"Registration submitted. Check your email if confirmation is required, then sign in.";
        signup.reset();
        show(0);
        status.textContent=response.access_token?"Account created. You can now sign in.":"Registration submitted. Check your email if confirmation is required, then sign in.";
      } catch(error){status.textContent=error.message||"Registration failed. Please try again.";}finally{button.disabled=false;}
    });
    show(0);
  }
  if (signin) {
    const status = document.getElementById("signin-status");
    signin.addEventListener("submit", async event => {
      event.preventDefault();
      if (!signin.reportValidity()) return;
      const button=signin.querySelector('button[type="submit"]');
      button.disabled=true;
      try{
        const api=await apiPromise;
        if(!api.authReady())throw new Error(api.authConfigError());
        const result=await api.login({email:document.getElementById("username").value.trim(),password:document.getElementById("password").value});
        if(!result.access_token||!result.user)throw new Error("Sign-in response was incomplete.");
        sessionStorage.setItem("anempire-session",JSON.stringify({access_token:result.access_token,expires_at:Date.now()+Number(result.expires_in||3600)*1000,user_id:result.user.id}));
        window.location.assign("home.html");
      }catch(error){status.textContent=error.message||"Sign in failed. Please try again.";}finally{button.disabled=false;}
    });
  }
})();
