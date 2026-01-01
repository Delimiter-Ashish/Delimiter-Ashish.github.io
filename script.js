const roles = [
  "AI Engineer",
  "AI Researcher",
  "ML Systems Builder",
  "Generative AI Specialist"
];

let index = 0;
let char = 0;
const typing = document.getElementById("typing");

function type() {
  if (char < roles[index].length) {
    typing.textContent += roles[index][char++];
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (char > 0) {
    typing.textContent = roles[index].substring(0, --char);
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 300);
  }
}

type();

document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("light");
};
