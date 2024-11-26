// ////////////////////// Récupération des éléments HTML ///////////////////////////////////

let button = document.querySelector("button");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let spaceComment = document.getElementById("comment-list");
let message = document.getElementById("message");

button.addEventListener("click", () => {
  if ((message.value, lastName.value, firstName.value)) {
    // /////////// Créations des nouvelles balises HTML pour le commentaire ////////////////////

    let Espace = document.createElement("div");
    let newSpaceComment = document.createElement("div");
    let newSpace = document.createElement("div");
    let newMessage = document.createElement("p");
    let newName = document.createElement("h3");

    // ///////////////////// Ajout des class au nouvelles balise ///////////////////////////////

    Espace.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");

    newSpaceComment.classList.add(
      "flex-1",
      "py-10",
      "border-t",
      "border-gray-200"
    );

    newSpace.classList.add(
      "prose",
      "prose-sm",
      "mt-4",
      "max-w-none",
      "text-gray-500"
    );

    newName.classList.add("font-medium", "text-gray-900");

    // //////////////////////////// Gestion du DOM ///////////////////////////////////////////////

    newName.append(firstName.value, lastName.value);
    newMessage.append(message.value);

    newSpaceComment.appendChild(newSpace);
    newSpace.appendChild(newName);
    newSpace.appendChild(newMessage);
    Espace.appendChild(newSpaceComment);
    spaceComment.appendChild(Espace);

    /////////////////////////////////////
    /////  disparition du formulaire et du bouton ////

    let form = document.querySelector("form");

    button.style.display = "none";
    form.style.display = "none";
  } else {
    alert("Remplissez tous les champs");
  }
});
