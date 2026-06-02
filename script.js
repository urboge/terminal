let p = document.getElementById("terminal-p");
let input = document.getElementById("terminal-input");
let directory = document.getElementById("directory");

input.focus();

directory.innerText = "tkwebos@user" + ":~$ "

p.onclick = function() {
   input.focus(); 
};

function react(command) {
    if (command === "ls") {
        add("no directory found")
    } else if (command === "nano") {
        add("nano created")
    }
}

function add(text) {
    p.innerHTML = p.innerHTML + "<p>" + "<span class='green'>timurs@timurs~:$ </span>" + text + "</p>";
}

function enter() {
    let inputValue = input.value;
    console.log(inputValue);
    add(inputValue);
    react(inputValue);
    input.value = ""
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    
    enter();

  }
});