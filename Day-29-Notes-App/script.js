let notes = JSON.parse(localStorage.getItem("notes")) || [];

function showNotes() {
    let container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notes.forEach((note, index) => {
        let div = document.createElement("div");
        div.className = "note";
        div.innerHTML = `
            ${note}
            <button onclick="deleteNote(${index})">X</button>
        `;
        container.appendChild(div);
    });
}

function addNote() {
    let input = document.getElementById("noteInput");
    if (input.value === "") return;

    notes.push(input.value);
    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";
    showNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

showNotes();
