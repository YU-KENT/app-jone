import FetchApi from "../outils/fetchApi"

import{getPropertyKeys,handleData,handleNotesDateSorting} from'../outils/HandleData'

class service{



getUserData(projectName){
    const data = FetchApi(('/data/user.json'))
    const userdata = data.projects;
    const projectData = userdata && userdata[projectName]
    return projectData 
 
}

getProjectNameArray(){
    const data = FetchApi(('/data/user.json'))
    const userProjects = data.projects;
    const arrayProjects = userProjects && getPropertyKeys(userProjects)
    return arrayProjects

}

getProjectVersion(projectName){
    const data = FetchApi(('/data/userTache.json'))
    const project = data[projectName];
    const projectVersion = project && project.version
    return projectVersion
}

getProjectTachesBrief(projectName,UserName){
    const data = FetchApi(('/data/userTache.json'))
    const project = data[projectName];
    const newTaches = project && handleData(project,UserName)
    return newTaches

}

getProjectTachesEntire(projectName){
    const data = FetchApi(('/data/project.json'))
    const project = data[projectName];
    
    return project
}


getNotesSortingArray(projectName){

    const data = FetchApi(('/data/project.json'))
    const project = data[projectName];
    const taches = project && project['taches']
    const notes = taches && handleNotesDateSorting(taches)
    return notes
}

}

 const services = new service()
 export default services