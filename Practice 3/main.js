let x = document.getElementById("demo");
x.innerHTML = x.innerText
  .split(" ")
  .map((word) =>
    word.length > 8 ? '<span class="h">' + word + "</span>" : word
  )
  .join(" ");
let a = document.createElement("a");
a.href =
  "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";
a.innerText = "© from here";
document.body.appendChild(a);
x.innerHTML = x.innerHTML.split(".").join("<p></p>");
let c = x.innerText.split(" ").length;
let c1 = document.createElement("a");
c1.innerText = "Here " + c + " words";
document.body.appendChild(document.createElement("br"));
document.body.appendChild(c1);
for (let i = 0; i < x.innerText.length; i++) {
  x.innerText = x.innerText.replace(/\!/g, "😲").replace(/\?/g, "🤔");
}
