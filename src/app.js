/* eslint-disable */
import "./style.css";
import "./index.html";

window.onLoad = function() {
  let par = document.querySelector("#excuse");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let sent = "";
  sent += who[rndm(who.length)] + " ";
  sent += action[rndm(action.length)] + " ";
  sent += what[rndm(what.length)] + " ";
  sent += when[rndm(when.length)];
  par.innerHTML = sent;
};

function rndm(num) {
  return Math.floor(Math.random() * num);
}
