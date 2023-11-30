import FetchApi from "../outils/fetchApi"

import{getPropertyKeys,handleData} from'../outils/HandleData'

class service{



getUserData(projectName){
    const data = FetchApi(('/data/user.json'))
    
    const userdata = data && data.projects;
    console.log("nqme nnnnn",userdata[projectName])
    return userdata[projectName]
 
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


}


 const services = new service()
 export default services