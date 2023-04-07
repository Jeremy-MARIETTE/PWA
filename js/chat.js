let form = document.getElementById("form");
let nom = document.getElementById("name");
let message = document.getElementById("message");
let app = document.getElementById("app");

let existingItems = localStorage.getItem("items");
if (existingItems) {
  existingItems = JSON.parse(existingItems);
  existingItems.forEach((item) => {
    let p = document.createElement("p");
    p.innerHTML = item.nom + ": " + item.message;
    app.appendChild(p);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nom.value == "") {
    alert("Veuillez entrer un nom.");
  }
  if (message.value == "") {
    alert("Veuillez entrer un message.");
  }

  let item = {
    id: Math.floor(Date.now() / 100),
    nom: nom.value,
    message: message.value,
  };

  let items = [];
  if (localStorage.getItem("items")) {
    items = JSON.parse(localStorage.getItem("items"));
  }
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));

  let p = document.createElement("p");
  p.innerHTML = item.id + " " + item.nom + ": " + item.message;
  app.appendChild(p);
});

// Creer un boutton pour effacer la conversation
let clearBtn = document.createElement("button");
clearBtn.classList.add("btn-secondary");
clearBtn.innerText = "Effacer la conversation";
let chatBox = document.getElementById("app");

// Ajouter un gestionnaire d'événements "click" au bouton
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("items");
  chatBox.innerHTML = "";
});

// Ajouter le bouton effacer la conversation au document
let container = document.querySelector(".container");
container.appendChild(clearBtn);
