import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import'../style/VerticalLayout.css'
import {loginState} from '../outils/selector';
import { useDispatch, useSelector  } from 'react-redux'
import { SiAirtable } from "react-icons/si";
import { IoDocuments } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { SiVitest } from "react-icons/si";
import { LuTestTubes } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";


function VerticalLayout(){
    const state = useSelector(loginState)
    const{id,UserName} = state;
    let userId =  id;
    console.log("vertical-state",state)

    return(
        <div className="vertical-content">
            <div className="vertical-logo">
                <IoSettingsOutline className='icon-setting-vertical'/>
            </div>
            <div className="vertical-content-wrappers">
                <div className="vertical-content-wrapper">
                    <NavLink to= {`/home/user/${userId}`} activeClassName="active" >
                        <SiAirtable className='vertical-icon'/>
                        <span>Table de travail</span>
                    </NavLink>
                </div>
                <div className="vertical-content-wrapper">
                    <NavLink to= {`/demande/user/${userId}`} activeClassName="active" >
                        <IoDocuments className='vertical-icon'/>
                        <span>Gestion de la demande</span>
                    </NavLink>
                </div>
                <div className="vertical-content-wrapper">
                     <NavLink to= {`/projects/user/${userId}/list`} activeClassName="active" >
                        <FaProjectDiagram className='vertical-icon'/>
                        <span>Gestion des projets</span>
                    </NavLink>
                </div>
                <div className="vertical-content-wrapper">
                     <NavLink to= {`/tests/user/${userId}/overview`} activeClassName="active" >
                        <SiVitest className='vertical-icon'/>
                        <span>Gestion des tests</span>
                    </NavLink>
                </div>
                <div className="vertical-content-wrapper">
                     <NavLink to= {`/raports/user/${userId}/developResourceList`} activeClassName="active" >
                        <LuTestTubes className='vertical-icon'/>
                        <span>Analysis</span>
                    </NavLink>
                </div>
            </div>
            <div className="vertical-account">
                <div className="vertical-message" onClick={()=>{console.log("click message")}}>
                    <FaBell  className="icon-message"/>
                    <span>Messages</span>
                </div>
                
                <div className="user-account">
                    <FaRegUserCircle className='icon-user' />
                    <span>{UserName}</span>
                </div>
                    

            </div>
        </div>
    )

}
export default VerticalLayout;