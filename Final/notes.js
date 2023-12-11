document.getElementById('note-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const noteText = document.getElementById('note-input').value;
    const timestamp = new Date().toLocaleString(); // This will create a timestamp
    addNote(noteText, timestamp);
    document.getElementById('note-input').value = ''; // Clear the input after adding a note
});

function addNote(text, time) {
    const notesList = document.getElementById('notes-list');
    const noteEntry = document.createElement('div');
    noteEntry.classList.add('note-entry'); // Add a class for styling if needed

    const noteContent = document.createElement('div');
    noteContent.classList.add('note-content');
    noteContent.innerText = text;

    const noteTimestamp = document.createElement('div');
    noteTimestamp.classList.add('note-timestamp');
    noteTimestamp.innerText = time;

    noteEntry.appendChild(noteContent);
    noteEntry.appendChild(noteTimestamp);

    notesList.appendChild(noteEntry);
}
