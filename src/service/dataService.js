import FetchApi from "../outils/fetchApi"

import{getPropertyKeys,handleData,handleNotesDateSorting,handleDemandeArray} from'../outils/HandleData'

class service{


getUserData(projectName){
    const {data,isLoading} = FetchApi(('/data/user.json'))
    if(isLoading) return false
    else{
    const userdata = data.projects;
    const projectData = userdata[projectName]
    return projectData }
 
}

getProjectNameArray(){
    const {data,isLoading} = FetchApi(('/data/user.json'))
    if(isLoading) return false
    else{
    const userProjects = data.projects;
    const arrayProjects = getPropertyKeys(userProjects)
    return arrayProjects}

}

getProjectVersion(projectName){
    const {data,isLoading}  = FetchApi(('/data/userTache.json'))
    if(isLoading) return false
    else{
    const project = data[projectName];
    const projectVersion = project.version
    return projectVersion}
}

getProjectTachesBrief(projectName,UserName){
    const {data,isLoading} = FetchApi(('/data/userTache.json'))
    if(isLoading) return false
    else{
    const project = data[projectName];
    const newTaches = handleData(project,UserName)
    return newTaches}

}

getProjectTachesEntire(projectName){
    const {data,isLoading} = FetchApi(('/data/project.json'))
    if(isLoading) return false
    else{
    const project = data[projectName];
    
    return project}
}

getNotesSortingArray(projectName){
    const {data,isLoading} = FetchApi(('/data/project.json'))
    if(isLoading) return false
    else{const project = data[projectName];
    const taches = project['taches']
    const notes = handleNotesDateSorting(taches)
    return notes}
}
async getDemandesArray(projectName) {
    try {
      const response = await fetch('/data/project.json');
      const data = await response.json();
  
      const project = data[projectName];
      const taches = project && project["taches"];
      const demandeArray = taches && handleDemandeArray(taches);
      const newArray = demandeArray ? [...demandeArray, ...demandeArray, ...demandeArray] : null;
      return newArray;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

}

 const services = new service()
 export default services