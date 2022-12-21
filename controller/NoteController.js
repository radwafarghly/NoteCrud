
var generator =require('../util/generator');
var memoryStorage =require('../util/memory.storage');
var model= require('../model/note.model')
const ApiError = require('../error/error-api');

class NoteController{


    getAllNotes(req, res){       
        let values=memoryStorage.getValues( memoryStorage.store);
        console.log('values.....'+JSON.stringify(values))
        res.json(values)

    }
    
    saveNote(req, res){
        var id  = generator.generate();  
        let Note = model.Note;
        let newNote = new Note(id,req.body.title,req.body.content,new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),'Radwa');
        memoryStorage.store.setItem(id, newNote);

        res.status(201).json(newNote) 
        // res.JSON(JSON.stringify(newNote))



    }

     updateNote(req, res){
        let Note = model.Note;
        let newNote = new Note(req.params.id,req.body.title,req.body.content,new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),'Radwa');
        memoryStorage.store.setItem(req.params.id, newNote);

        res.status(200).send('update  note..........')
    }

    deleteNote(req, res,next){
        let note = memoryStorage.store.getItem(req.params.id);
        if(note == null){
            return res.status(404).json('Note not found');
        }
        let noteItem = memoryStorage.store.removeItem(req.params.id);
        res.send('delete  note..........')
    }

}



module.exports =  new NoteController();
