// let notesTitles = ['how to','hello title!','see you later','let\'s go'];
// let notes = ['use the input above to add a note','organize your notes with titles','move notes to the archive to keep your focus','and add your notes!'];

// let archiveNotesTitles = ['clean and simple','do you miss me?','thx bye'];
// let archiveNotes = ['your archived notes are saved here','restore your archived notes easily','or delete them forever with our handy trashbin'];


// object statt mehrere arrays benutzen
let allNotes = {
    'notesTitles': ['how to','hello title!','see you later','let\'s go'],
    'notes': ['use the input above to add a note','organize your notes with titles','move notes to the archive to keep your focus','and add your notes!'],
    'archiveNotesTitles': ['clean and simple','do you miss me?','thx bye'],
    'archiveNotes': ['your archived notes are saved here','restore your archived notes easily','or delete them forever with our handy trashbin'],
}



//onload render function
function init() {
    getFromLocalStorage();
    renderNotes();
    renderArchiveNotes();
}

function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = " ";

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote); 
    }
}

function renderArchiveNotes() {
    let archiveContentRef = document.getElementById('archive_content');
    archiveContentRef.innerHTML = " ";

    for (let indexArchiveNote = 0; indexArchiveNote < allNotes.archiveNotes.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote); 
    }
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;
    let noteTitleInputRef = document.getElementById('note_title_input');
    let noteTitleInput = noteTitleInputRef.value;

    if (noteTitleInput !== "" && noteInput !== "") {
        notes.push(noteInput);
        notesTitles.push(noteTitleInput);

        saveToLocalStorage()

        renderNotes();
        noteInputRef.value = "";
        noteTitleInputRef.value = "";
    }   
}

function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote,1);
    allNotes[destinationKey].push(note[0]);

    let noteTitle = allNotes[startKey + 'Titles'].splice(indexNote,1);
    allNotes[destinationKey + 'Titles'].push(noteTitle[0]);

    renderNotes();
    renderArchiveNotes();
}

// function moveToArchive(indexNote) {
//     let archiveNote = notes.splice(indexNote,1);
//     archiveNotes.push(archiveNote[0]);
//     let archiveNoteTitle = notesTitles.splice(indexNote,1);
//     archiveNotesTitles.push(archiveNoteTitle[0]);

//     saveToLocalStorage();

//     renderNotes();
//     renderArchiveNotes();
// }

// function restoreFromArchive(indexArchiveNote) {
//     let restoredNote = archiveNotes.splice(indexArchiveNote,1);
//     notes.push(restoredNote[0]);
//     let restoredNoteTitle = archiveNotesTitles.splice(indexArchiveNote,1);
//     notesTitles.push(restoredNoteTitle[0]);

//     saveToLocalStorage();

//     renderNotes();
//     renderArchiveNotes();
// }

function permanentDelete(indexArchiveNote) {
    allNotes.archiveNotes.splice(indexArchiveNote,1);
    allNotes.archiveNotesTitles.splice(indexArchiveNote,1)
    saveToLocalStorage();
    renderArchiveNotes();
}

// localStorage
function saveToLocalStorage(){
    localStorage.setItem("myNotes", JSON.stringify(notes));
    localStorage.setItem("myNotesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("myArchiveNotes", JSON.stringify(archiveNotes));
    localStorage.setItem("myArchiveNotesTitles", JSON.stringify(archiveNotesTitles));
}

function getFromLocalStorage() {
    let myArr = JSON.parse(localStorage.getItem("myNotes"));
    let myArrTitles = JSON.parse(localStorage.getItem("myNotesTitles"));

    let myArrArchive = JSON.parse(localStorage.getItem("myArchiveNotes"));
    let myArrArchiveTitles = JSON.parse(localStorage.getItem("myArchiveNotesTitles"));

    if (myArr != null) { 
        notesTitles = myArrTitles;
        notes = myArr;
    }

    if (myArrArchive != null) {
        archiveNotesTitles = myArrArchiveTitles;
        archiveNotes = myArrArchive;
    }
}


// To-Do
//  -addNote anpassen (für Object)
//  -renderAll function wo alle renderfunctions aufgerufen werden
//  -localStorage anpassen 
//  -render functions anpassen 
    // mit if-else abfrage welches html reingeladen wird
    // hint: man kann die ID als parameter übergeben und das array(object) auch