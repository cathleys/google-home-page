const div = document.createElement("div");
const div2 = document.createElement("div");
const h1 = document.createElement("h1");
const input = document.createElement("input");
const span = document.createElement("span");
const span2 = document.createElement("span");

const navText = ["Gmail", "Images", "Sign in"];

const ul = document.createElement("ul");
document.body.appendChild(ul);
ul.classList.add("navlink");

navText.forEach((items) => {
  const li = document.createElement("li");
  li.innerText = items;
  ul.appendChild(li);

  li.classList.add("span");
});

h1.innerText = "Google";
div.classList.add("google");
div.appendChild(h1);
div.appendChild(input);

div.appendChild(div2);
div2.classList.add("div2");
div2.appendChild(span);
div2.appendChild(span2);

document.body.appendChild(div);
input.setAttribute("type", "text");

span.innerText = "Google Search ";
span2.innerText = "I'm Feeling happy";

span.classList.add("span");
span2.classList.add("span");

h1.addEventListener("click", () => {
  h1.style.color = "green";
});
