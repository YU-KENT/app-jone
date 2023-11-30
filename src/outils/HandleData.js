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
