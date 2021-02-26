const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!');
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log("Removing the note!");
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function() {
        console.log('Listing notes');
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function() {
        console.log('Reading note!');
    }
})

// add, remove, read, list

console.log(yargs.argv);