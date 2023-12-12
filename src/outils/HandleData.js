export const getPropertyKeys = (obj)=> {
    
    return Object.keys(obj);}

export const handleData = (obj,UserName)=>{
    let array = obj["J'ai crée"]
    let newArray =[]
    for(let i=0; i < array.length; i++){
       if(array[i].responsable === UserName){
         newArray.push(array[i]);   
      }
    }
    return { "J'ai crée":array,
             "J'effectue": newArray
    }
}

export const handleNotesDateSorting = (taches) => {
    let notes = [];
    for (let i = 0; i < taches.length; i++) {
      taches[i].notes.forEach((note) => {
        const newNote = {
          "description": taches[i].description,
          ...note
        };
        notes.push(newNote);
      });
    }
    notes.sort((a, b) => new Date(b.time) - new Date(a.time));
    return notes;
  };

  export const handleNotesByTache = (tache) => {
    let notes = [];
    tache.notes.forEach((note) =>{
        const newNote = {
          "description": tache.description,
          ...note
        }
        notes.push(newNote);
      });
    
      notes.sort((a, b) => new Date(b.time) - new Date(a.time));
    
    return notes;
  };
 

  export const handleDemandeArray =(taches)=>{
    let demandeArray = [];
    for (let i = 0; i < taches.length; i++) {
      if(taches[i].type === "demande"){
        demandeArray.push(taches[i]);
      };
    }
    return demandeArray;

  }