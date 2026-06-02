let p = document.getElementById("terminal-p");
let inputTerminal = document.getElementById("terminal-input");
let directoryTerminal = document.getElementById("directory");

inputTerminal.focus();

let directoryTerminalName = "tkwebos@user"

directoryTerminal.innerText = directoryTerminalName + ":~$ "

p.onclick = function() {
   inputTerminal.focus(); 
};

function react(command) {
    if (command === "ls") {
        add("no directoryTerminal found")
    } else if (command === "nano") {
        add("nano created")
    }
}

function add(text) {
    p.innerHTML = p.innerHTML + "<p>" + "<span class='green'>"+ directoryTerminalName +"~:$ </span>" + text + "</p>";
}

function enter() {
    let inputValue = inputTerminal.value;
    console.log(inputValue);
    add(inputValue);
    react(inputValue);
    inputTerminal.value = ""
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    
    enter();

  }
});
