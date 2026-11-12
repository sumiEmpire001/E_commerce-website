/* AnEmpire offline help assistant. This is a rule-based guide, not live AI support.
 * It never claims that demo features, payment processing or shipping are operational.
 */
(() => {
  "use strict";
  const body=document.getElementById("chatBody");
  const input=document.getElementById("userInput");
  const send=document.getElementById("sendBtn");
  if(!body||!input||!send)return;
  const topics=[
    {words:["hello","hi","hey","good morning"],reply:"Welcome to AnEmpire! I can help you find the marketplace, learn about registration, or explain which features are still in development."},
    {words:["product","shop","buy","market","category","price"],reply:"You can browse sample products, search categories and use the demo cart in our marketplace. Product listings are examples, not live offers.",link:"marketplace.html",label:"Open marketplace"},
    {words:["register","signup","sign up","account","seller"],reply:"The original four-stage registration page is available. Creating a real account requires the account service to be configured.",link:"signup.html",label:"Registration page"},
    {words:["login","log in","sign in","signin","password"],reply:"Sign-in requires the account service to be configured. Never share your password in this chat.",link:"signin.html",label:"Sign-in page"},
    {words:["pay","checkout","order","delivery","shipping","refund","return"],reply:"AnEmpire does not currently process real orders or payments. Delivery, refunds and returns are not yet available through this demo."},
    {words:["chat","message","friend","community","post"],reply:"Community posting and private messaging are under development. The original pages are preserved, but these features are not live."},
    {words:["support","contact","help","complaint"],reply:"This assistant is an offline guide, not a live customer-service agent. You can read the existing Support page.",link:"suppout.html",label:"Support information"},
    {words:["about","company","empire"],reply:"AnEmpire is a developing marketplace and community website. Read its original About page for the project vision.",link:"About.html",label:"About AnEmpire"}
  ];
  function response(message){
    const query=message.toLowerCase().replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
    const match=topics.find(topic=>topic.words.some(word=>query===word||query.includes(word)));
    return match||{reply:"I am a simple offline help guide, not a live AI. Try asking about products, registration, sign-in, support, or payments."};
  }
  function bubble(speaker,message,link,label){
    const box=document.createElement("div");
    box.className=speaker==="You"?"user-message":"bot-message";
    const heading=document.createElement("strong");heading.textContent=speaker+": ";
    const text=document.createElement("span");text.textContent=message;
    box.append(heading,text);
    if(link){const anchor=document.createElement("a");anchor.href=link;anchor.textContent=" "+label;box.append(anchor);}
    body.append(box);body.scrollTop=body.scrollHeight;
  }
  function submit(){
    const value=input.value.trim();
    if(!value)return;
    if(value.length>500){bubble("AnEmpire Guide","Please shorten your question to 500 characters.");return;}
    bubble("You",value);input.value="";
    const answer=response(value);
    bubble("AnEmpire Guide",answer.reply,answer.link,answer.label);
  }
  send.addEventListener("click",submit);
  input.addEventListener("keydown",event=>{if(event.key==="Enter"){event.preventDefault();submit();}});
  bubble("AnEmpire Guide","Welcome! I am AnEmpire's offline help guide. I do not connect to a live AI or customer-service team.");
})();
