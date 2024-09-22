function getNoteTemplate(indexNote) {
    return `<div class="notes-container notes-bg">
                <div class="notes-content"><h4>${allNotes.notesTitles[indexNote]}</h4>
                <p>${allNotes.notes[indexNote]}</p></div>
                <div class="notes-options"><img onclick="moveNote(${indexNote}, 'notes', 'archiveNotes')" src="./assets/img/icons/archive.png" alt="archive" title="move to archive" class="notes-options-img icon-hover"></div>
            </div>`;
}

function getArchiveNoteTemplate(indexArchiveNote) {
    return `<div class="notes-container archive-notes-bg">
                <div class="notes-content"><h4>${allNotes.archiveNotesTitles[indexArchiveNote]}</h4>
                <p>${allNotes.archiveNotes[indexArchiveNote]}</p></div>
                <div class="notes-options">
                    <img onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'notes')" src="./assets/img/icons/restore.png" alt="restore note" title="restore note" class="notes-options-img icon-hover">
                    <img onclick="permanentDelete(${indexArchiveNote})" src="./assets/img/icons/trash.png" alt="delete forever" title="delete permanently" class="notes-options-img icon-archive-hover">
                </div>
            </div>`;
}