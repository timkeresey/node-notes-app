const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your Notes..';
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const notesKept = notes.filter(note => {
        return note.title !== title;
    })

    if (notesKept.length !== notes.length) {
        saveNotes(notesKept);
        console.log(chalk.green.inverse('Note removed'));
    } else {
        console.log(chalk.red.inverse('No matching notes found...'));
    }

}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.blue('Your notes:'));
    const titles = notes.forEach(note => console.log(chalk.cyan(note.title)))
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};